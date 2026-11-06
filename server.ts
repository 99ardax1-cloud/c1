import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, ThinkingLevel, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getGenAIClient() {
  return new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build'
      }
    }
  });
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '25mb' }));

  // Deep C1 Hochschule Essay & Grammar Evaluation
  app.post('/api/ai/evaluate-essay', async (req, res) => {
    try {
      const { essay, topic, variantTitle, customQuestion } = req.body || {};
      if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'MY_GEMINI_API_KEY') {
        return res.status(503).json({
          error:
            'GEMINI_API_KEY sozlanmagan. Mahalliy 4-mezonli telc C1 tahlili avtomatik ishlamoqda.'
        });
      }

      const ai = getGenAIClient();
      const prompt = customQuestion
        ? `Sie sind ein offizieller Prüfer für "telc Deutsch C1 Hochschule". Beantworten Sie die folgende komplexe Frage zur Prüfung (${variantTitle || 'C1 Hochschule'}) präzise auf Deutsch und Usbekisch:\n\nFrage: ${customQuestion}`
        : `Sie sind ein lizenzierter Prüfer für "telc Deutsch C1 Hochschule" (Schriftlicher Ausdruck, max. 48 Punkte).
Bewerten Sie den folgenden Aufsatz streng nach den 4 offiziellen telc-Kriterien:
1. Aufgabenbewältigung (max. 12 Punkte)
2. Kommunikative Gestaltung (max. 12 Punkte)
3. Korrektheit (max. 12 Punkte)
4. Wortschatz / Ausdruck (max. 12 Punkte)

Gewähltes Thema: ${topic || 'Wissenschaftlicher Aufsatz'}
Aufsatz des Teilnehmers:
"""
${essay || ''}
"""

Geben Sie ein detailliertes Gutachten auf Deutsch und Usbekisch (O'zbek tilida tushuntirish bilan) sowie konkrete C1-Verbesserungsvorschläge (Nominalstil, Konnektoren, wissenschaftliche Redemittel).`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.HIGH
          }
        }
      });

      return res.json({
        analysis: response.text || ''
      });
    } catch (err: any) {
      return res.status(500).json({
        error: err?.message || 'KI-Tahlil xatosi yuz berdi.'
      });
    }
  });

  // telc Deutsch C1 Hochschule — Mündliche Prüfung (Sprechen) Audio Transcription & KI Examiner Evaluation
  app.post('/api/ai/evaluate-speaking', async (req, res) => {
    try {
      const {
        audioBase64,
        mimeType = 'audio/webm',
        transcriptText = '',
        partType = 'teil1a',
        topicTitle = '',
        topicPrompt = '',
        durationSeconds = 0
      } = req.body || {};

      if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'MY_GEMINI_API_KEY') {
        return res.status(503).json({
          error:
            'GEMINI_API_KEY topilmadi (Settings > Secrets). Mahalliy C1 nutq tahlilchisi ishga tushirildi.'
        });
      }

      const ai = getGenAIClient();
      let finalTranscript = (transcriptText || '').trim();

      // Step 1: Transcribe pre-recorded audio with gemini-3.5-transcribe if audioBase64 is provided
      if (audioBase64 && typeof audioBase64 === 'string' && audioBase64.length > 100) {
        try {
          const cleanBase64 = audioBase64.includes(',')
            ? audioBase64.split(',')[1]
            : audioBase64;
          const cleanMime = (mimeType || 'audio/webm').split(';')[0].trim() || 'audio/webm';

          const transcribeResp = await ai.models.generateContent({
            model: 'gemini-3.5-transcribe',
            contents: {
              parts: [
                {
                  inlineData: {
                    mimeType: cleanMime,
                    data: cleanBase64
                  }
                },
                {
                  text: 'Transcribe this German spoken exam recording accurately in German. Return only the spoken words.'
                }
              ]
            }
          });

          const transcribed = (transcribeResp.text || '').trim();
          if (transcribed) {
            finalTranscript = transcribed;
          }
        } catch (transcribeErr) {
          // If gemini-3.5-transcribe fails on a specific container, pass audio directly to gemini-3.8-flash multimodal below
          console.warn('Transcription step fallback to multimodal:', transcribeErr);
        }
      }

      // Step 2: Evaluate the spoken performance with gemini-3.8-flash using structured JSON output
      const taskLabel =
        partType === 'teil1a'
          ? 'Teil 1A: Kurzvortrag / Präsentation (ca. 3 Min., max. 8 Punkte)'
          : partType === 'teil1b'
            ? 'Teil 1B: Zusammenfassung & Anschlussfragen (ca. 2 Min., max. 6 Punkte)'
            : 'Teil 2: Diskussion über ein Zitat (ca. 6 Min., max. 10 Punkte)';

      const evalPrompt = `Sie sind ein offizieller lizenzierter Prüfer für die mündliche Prüfung "telc Deutsch C1 Hochschule" (Maximal 48 Punkte, Bestehensgrenze: 29 Punkte).
Prüfungsteil: ${taskLabel}
Gewähltes Thema / Zitat: ${topicTitle}
Aufgabenstellung: ${topicPrompt}
Sprechdauer: ${durationSeconds} Sekunden.
${
  finalTranscript
    ? `Transkribierte Rede des Kandidaten:\n"""\n${finalTranscript}\n"""`
    : 'Bitte transkribieren Sie zuerst die beigefügte Audioaufnahme des Kandidaten Wort für Wort auf Deutsch und bewerten Sie diese anschließend.'
}

Bewerten Sie die Leistung fair, präzise und konstruktiv nach den offiziellen telc C1 Hochschule Kriterien:
- Inhaltliche Angemessenheit:
  - teil1aScore (0 bis 8 Punkte): Gliederung, Vor-/Nachteile, Beispiele, Fazit.
  - teil1bScore (0 bis 6 Punkte): Zusammenfassung in indirekter Rede & 2 Anschlussfragen.
  - teil2Score (0 bis 10 Punkte): Zitat-Definition, eigene Meinung (Pro/Contra), konkretes Beispiel.
- Sprachliche Angemessenheit (jeweils 0 bis 6 Punkte):
  - fluessigkeit (0–6): Sprechfluss, Konnektoren, Kohärenz.
  - repertoire (0–6): Akademischer C1-Wortschatz, Nominalstil, Redemittel.
  - grammatik (0–6): Komplexe Nebensätze, Passiv, Konjunktiv, Korrektheit.
  - aussprache (0–6): Natürliche Intonation, Wort- und Satzakzent.

WICHTIG:
1. Geben Sie "uzbekFeedback" in einfacher, sehr klar verständlicher usbekischer Sprache (O'zbek tilida sodda va tushunarli tahlil: nomzod nimalarni to'g'ri aytdi va ballni oshirish uchun nima qo'shishi kerak).
2. Geben Sie konkrete Satzkorrekturen ("corrections"): Was hat der Kandidat gesagt -> Wie klingt es auf perfektem C1-Niveau -> Kurze Erklärung auf Usbekisch.
3. Geben Sie unter "modelSpeechDe" eine kurze, perfekt strukturierte C1-Musterantwort zu genau diesem Thema, die der Kandidat direkt laut nachsprechen kann.`;

      const contentsParts: any[] = [];
      if (
        !finalTranscript &&
        audioBase64 &&
        typeof audioBase64 === 'string' &&
        audioBase64.length > 100
      ) {
        const cleanBase64 = audioBase64.includes(',')
          ? audioBase64.split(',')[1]
          : audioBase64;
        const cleanMime = (mimeType || 'audio/webm').split(';')[0].trim() || 'audio/webm';
        contentsParts.push({
          inlineData: {
            mimeType: cleanMime,
            data: cleanBase64
          }
        });
      }
      contentsParts.push({ text: evalPrompt });

      const evalResp = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: { parts: contentsParts },
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              transcript: {
                type: Type.STRING,
                description: 'Exact German transcript of what the candidate spoke.'
              },
              teil1aScore: {
                type: Type.INTEGER,
                description: 'Score for Teil 1A (0 to 8).'
              },
              teil1bScore: {
                type: Type.INTEGER,
                description: 'Score for Teil 1B (0 to 6).'
              },
              teil2Score: {
                type: Type.INTEGER,
                description: 'Score for Teil 2 (0 to 10).'
              },
              fluessigkeit: {
                type: Type.INTEGER,
                description: 'Score for fluency and connectors (0 to 6).'
              },
              repertoire: {
                type: Type.INTEGER,
                description: 'Score for vocabulary and C1 expressions (0 to 6).'
              },
              grammatik: {
                type: Type.INTEGER,
                description: 'Score for grammatical accuracy and complexity (0 to 6).'
              },
              aussprache: {
                type: Type.INTEGER,
                description: 'Score for pronunciation and intonation (0 to 6).'
              },
              cefrLevel: {
                type: Type.STRING,
                description: 'Estimated level, e.g. C1 Hochschule, B2+, B2.'
              },
              uzbekFeedback: {
                type: Type.STRING,
                description: 'Clear, encouraging, step-by-step explanation in Uzbek.'
              },
              germanFeedback: {
                type: Type.STRING,
                description: 'Constructive examiner feedback in German.'
              },
              strengths: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: '3 strong points in Uzbek and German.'
              },
              corrections: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    original: { type: Type.STRING },
                    correctedC1: { type: Type.STRING },
                    explanationUz: { type: Type.STRING }
                  }
                },
                description: 'Specific grammar or vocabulary upgrades to C1.'
              },
              modelSpeechDe: {
                type: Type.STRING,
                description: 'Complete C1 model speech in German for this topic.'
              }
            }
          }
        }
      });

      const parsed = JSON.parse((evalResp.text || '{}').trim());
      return res.json({
        ...parsed,
        transcript: parsed.transcript || finalTranscript
      });
    } catch (err: any) {
      return res.status(500).json({
        error: err?.message || 'KI nutq tahlilida xatolik yuz berdi.'
      });
    }
  });

  // High-Quality Visual Study Aid Generation
  app.post('/api/ai/generate-image', async (req, res) => {
    try {
      const { prompt, imageSize = '1K' } = req.body || {};
      const validSize: '1K' | '2K' | '4K' =
        imageSize === '2K' || imageSize === '4K' ? imageSize : '1K';

      if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'MY_GEMINI_API_KEY') {
        return res.status(503).json({
          error:
            'Tasvir yaratish uchun GEMINI_API_KEY talab etiladi (Settings > Secrets panelida).'
        });
      }

      const ai = getGenAIClient();
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite-image',
        contents: {
          parts: [
            {
              text:
                prompt ||
                'Editorial academic illustration of a German university lecture hall and scientific research library, clean architectural lines, natural daylight.'
            }
          ]
        },
        config: {
          imageConfig: {
            aspectRatio: '16:9',
            imageSize: validSize
          }
        }
      });

      let imageUrl = '';
      let caption = '';
      const parts = response.candidates?.[0]?.content?.parts || [];
      for (const part of parts) {
        if (part.inlineData?.data) {
          const mime = part.inlineData.mimeType || 'image/png';
          imageUrl = `data:${mime};base64,${part.inlineData.data}`;
        } else if (part.text) {
          caption += part.text;
        }
      }

      if (!imageUrl) {
        return res.status(500).json({ error: 'Tasvir qaytarilmadi.' });
      }

      return res.json({ imageUrl, caption, imageSize: validSize });
    } catch (err: any) {
      return res.status(500).json({
        error: err?.message || 'Tasvir yaratishda xatolik yuz berdi.'
      });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vitePromise = import('vite').then(({ createServer: createViteServer }) =>
      createViteServer({
        server: { middlewareMode: true },
        appType: 'spa'
      })
    );
    app.use(async (req, res, next) => {
      try {
        const vite = await vitePromise;
        vite.middlewares(req, res, next);
      } catch (err) {
        next(err);
      }
    });
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`telc C1 Hochschule Digital Server listening on http://localhost:${PORT}`);
  });
}

startServer();
