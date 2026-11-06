import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import {
  X,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
  Camera,
  Sparkles,
  Volume2,
  Award,
  Monitor,
  HelpCircle,
  Download
} from 'lucide-react';

interface ExamHall3DModalProps {
  isOpen: boolean;
  variantId?: string;
  variantTitle: string;
  grandTotal: number;
  part1Total?: number;
  part2Total?: number;
  totalAnsweredCount?: number;
  remainingTimeFormatted?: string;
  onClose: () => void;
}

type CameraPresetId = 'desk' | 'projector' | 'trophy' | 'hall';
type FinishThemeId = 'navy' | 'platinum' | 'gold';

export const ExamHall3DModal: React.FC<ExamHall3DModalProps> = ({
  isOpen,
  variantId = '1',
  variantTitle,
  grandTotal,
  part1Total = 0,
  part2Total = 0,
  totalAnsweredCount = 0,
  remainingTimeFormatted = '200:00',
  onClose
}) => {
  const canvasMountRef = useRef<HTMLDivElement>(null);
  const [dockCollapsed, setDockCollapsed] = useState<boolean>(false);
  const [cameraPreset, setCameraPreset] = useState<CameraPresetId>('desk');
  const [finishTheme, setFinishTheme] = useState<FinishThemeId>('navy');
  const [selectedObjectInfo, setSelectedObjectInfo] = useState<{
    title: string;
    subtitle: string;
    detail: string;
  } | null>({
    title: 'Interaktiv 3D telc C1 Imtihon Zali',
    subtitle: 'Sichqoncha bilan 360° aylantiring yoki 3D buyumlarni (Monitor, Quloqchin, Kubok, Proyektor) bosing',
    detail: `Faol variant: ${variantTitle} · Javoblar: ${totalAnsweredCount}/74 · Ball: ${grandTotal}/166`
  });

  // Visual Topic Card Generator state (gemini-3-pro-image-preview with 1K / 2K / 4K)
  const [showImagePanel, setShowImagePanel] = useState<boolean>(false);
  const [imageSize, setImageSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [imagePrompt, setImagePrompt] = useState<string>(
    `Academic illustration for telc C1 Hochschule topic: ${variantTitle}`
  );
  const [genLoading, setGenLoading] = useState<boolean>(false);
  const [genImageUrl, setGenImageUrl] = useState<string>('');
  const [genInfoMsg, setGenInfoMsg] = useState<string>('');

  const triggerPresetRef = useRef<((preset: CameraPresetId) => void) | null>(null);
  const triggerThemeRef = useRef<((theme: FinishThemeId) => void) | null>(null);
  const updateProjectorImageRef = useRef<((dataUrl: string) => void) | null>(null);

  useEffect(() => {
    setImagePrompt(`Academic illustration for telc C1 Hochschule: ${variantTitle}`);
  }, [variantTitle]);

  const playHallAudioCheck = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'de-DE';
    utter.rate = 1.0;
    window.speechSynthesis.speak(utter);
  };

  // Builds a crisp procedural 1K/2K/4K C1 Study Infographic Poster if API key is not configured
  const generateLocalStudyPoster = (sizeLabel: '1K' | '2K' | '4K', promptText: string): string => {
    const dimW = sizeLabel === '4K' ? 2560 : sizeLabel === '2K' ? 1920 : 1280;
    const dimH = Math.round((dimW * 9) / 16);
    const c = document.createElement('canvas');
    c.width = dimW;
    c.height = dimH;
    const ctx = c.getContext('2d');
    if (!ctx) return '';

    const scale = dimW / 1280;
    const grad = ctx.createLinearGradient(0, 0, dimW, dimH);
    grad.addColorStop(0, '#0F372F');
    grad.addColorStop(0.55, '#154A3F');
    grad.addColorStop(1, '#0A2620');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, dimW, dimH);

    // Subtle architectural grid
    ctx.strokeStyle = 'rgba(236, 188, 107, 0.14)';
    ctx.lineWidth = 1.5 * scale;
    for (let x = 0; x < dimW; x += 64 * scale) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, dimH);
      ctx.stroke();
    }
    for (let y = 0; y < dimH; y += 64 * scale) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(dimW, y);
      ctx.stroke();
    }

    // Top Luscious Lemon badge
    ctx.fillStyle = '#ECBC6B';
    ctx.fillRect(60 * scale, 52 * scale, 360 * scale, 44 * scale);
    ctx.fillStyle = '#0F372F';
    ctx.font = `bold ${20 * scale}px sans-serif`;
    ctx.fillText(`telc C1 HOCHSCHULE · ${sizeLabel} INFOGRAFIK`, 78 * scale, 81 * scale);

    // Main Title
    ctx.fillStyle = '#ECBC6B';
    ctx.font = `bold ${40 * scale}px sans-serif`;
    ctx.fillText(variantTitle.slice(0, 56), 60 * scale, 155 * scale);

    ctx.fillStyle = '#FAF3E3';
    ctx.font = `${22 * scale}px sans-serif`;
    ctx.fillText(`Fokus: ${promptText.slice(0, 75)}`, 60 * scale, 198 * scale);

    // 4 C1 Study Pillars Boxes
    const boxes = [
      {
        title: '1. LESEVERSTEHEN (48 Pkt.)',
        sub: 'Teil 1: Textrekonstruktion (12p) · Teil 2: Selektiv (12p) · Teil 3: Detail R/F/X (24p)'
      },
      {
        title: '2. SPRACHBAUSTEINE (22 Pkt.)',
        sub: 'Aufgaben 25–46: Präpositionen, Konnektoren, Funktionsverbgefüge, Konjunktiv I/II'
      },
      {
        title: '3. HÖRVERSTEHEN (48 Pkt.)',
        sub: 'Teil 1: Global (16p) · Teil 2: Radio-Interview (20p) · Teil 3: Vorlesungsfolien (12p)'
      },
      {
        title: '4. SCHREIBEN (48 Pkt. · 350+ Wörter)',
        sub: 'Einleitung & These · Pro/Contra-Argumentation · Wissenschaftlicher Nominalstil · Fazit'
      }
    ];

    boxes.forEach((b, idx) => {
      const by = (240 + idx * 105) * scale;
      ctx.fillStyle = 'rgba(15, 55, 47, 0.92)';
      ctx.fillRect(60 * scale, by, 1160 * scale, 88 * scale);
      ctx.strokeStyle = '#ECBC6B';
      ctx.lineWidth = 2 * scale;
      ctx.strokeRect(60 * scale, by, 1160 * scale, 88 * scale);

      ctx.fillStyle = '#ECBC6B';
      ctx.font = `bold ${22 * scale}px sans-serif`;
      ctx.fillText(b.title, 85 * scale, by + 34 * scale);

      ctx.fillStyle = '#FAF3E3';
      ctx.font = `${19 * scale}px sans-serif`;
      ctx.fillText(b.sub, 85 * scale, by + 66 * scale);
    });

    return c.toDataURL('image/png');
  };

  useEffect(() => {
    if (!isOpen || !canvasMountRef.current) return;
    const container = canvasMountRef.current;

    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const scene = new THREE.Scene();
    const fogColor = new THREE.Color(0x0a2620);
    scene.background = fogColor;
    scene.fog = new THREE.FogExp2(0x0a2620, 0.025);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2.85, 3.6);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Studio Environment Map (RoomEnvironment + PMREMGenerator)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envTarget = pmremGenerator.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = envTarget.texture;
    pmremGenerator.dispose();

    // Warm/Cool Lighting Rig
    const hemiLight = new THREE.HemisphereLight(0xecbc6b, 0x0f372f, 0.9);
    hemiLight.position.set(0, 12, 0);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xfff4e6, 1.9);
    keyLight.position.set(5, 9, 6);
    keyLight.castShadow = !isSoftwareGl;
    keyLight.shadow.mapSize.set(1024, 1024);
    const d = 8;
    keyLight.shadow.camera.left = -d;
    keyLight.shadow.camera.right = d;
    keyLight.shadow.camera.top = d;
    keyLight.shadow.camera.bottom = -d;
    keyLight.shadow.bias = -0.0005;
    keyLight.shadow.normalBias = 0.02;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xecbc6b, 0.95);
    rimLight.position.set(-6, 5, -5);
    scene.add(rimLight);

    // Procedural Floor Texture
    const floorCanvas = document.createElement('canvas');
    floorCanvas.width = 256;
    floorCanvas.height = 256;
    const fCtx = floorCanvas.getContext('2d');
    if (fCtx) {
      fCtx.fillStyle = '#0F372F';
      fCtx.fillRect(0, 0, 256, 256);
      fCtx.strokeStyle = '#1B5E50';
      fCtx.lineWidth = 2;
      for (let i = 0; i <= 256; i += 32) {
        fCtx.beginPath();
        fCtx.moveTo(i, 0);
        fCtx.lineTo(i, 256);
        fCtx.stroke();
        fCtx.beginPath();
        fCtx.moveTo(0, i);
        fCtx.lineTo(256, i);
        fCtx.stroke();
      }
    }
    const floorTex = new THREE.CanvasTexture(floorCanvas);
    floorTex.colorSpace = THREE.SRGBColorSpace;
    floorTex.wrapS = THREE.RepeatWrapping;
    floorTex.wrapT = THREE.RepeatWrapping;
    floorTex.repeat.set(10, 10);
    floorTex.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const floorMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(34, 34),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: floorTex,
        roughness: 0.6,
        metalness: 0.15
      })
    );
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    // Contact Shadow Disc under Candidate Desk
    const contactShadow = new THREE.Mesh(
      new THREE.CircleGeometry(2.5, 32),
      new THREE.MeshBasicMaterial({
        color: 0x051410,
        transparent: true,
        opacity: 0.45,
        depthWrite: false
      })
    );
    contactShadow.rotation.x = -Math.PI / 2;
    contactShadow.position.y = 0.015;
    scene.add(contactShadow);

    // Shared Materials in Storm Green & Luscious Lemon
    const oakMat = new THREE.MeshStandardMaterial({
      color: 0xecbc6b,
      roughness: 0.48,
      metalness: 0.12
    });
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x0f372f,
      roughness: 0.3,
      metalness: 0.8
    });
    const darkPlasticMat = new THREE.MeshStandardMaterial({
      color: 0x0a2620,
      roughness: 0.45,
      metalness: 0.3
    });
    const accentOrangeMat = new THREE.MeshStandardMaterial({
      color: 0xecbc6b,
      roughness: 0.25,
      metalness: 0.6
    });
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xecbc6b,
      roughness: 0.18,
      metalness: 0.92
    });

    // Dynamic Canvas Texture 1: Candidate's Live telc Digital Exam Monitor
    const monCanvas = document.createElement('canvas');
    monCanvas.width = 1024;
    monCanvas.height = 576;
    const mCtx = monCanvas.getContext('2d');
    if (mCtx) {
      mCtx.fillStyle = '#FAF3E3';
      mCtx.fillRect(0, 0, 1024, 576);
      // Top header
      mCtx.fillStyle = '#0F372F';
      mCtx.fillRect(0, 0, 1024, 68);
      mCtx.fillStyle = '#ECBC6B';
      mCtx.fillRect(20, 16, 72, 36);
      mCtx.fillStyle = '#0F372F';
      mCtx.font = 'bold 22px sans-serif';
      mCtx.fillText('telc', 36, 42);
      mCtx.fillStyle = '#ECBC6B';
      mCtx.font = 'bold 24px sans-serif';
      mCtx.fillText(`Deutsch C1 Hochschule · Variant ${variantId}`, 110, 42);
      mCtx.fillStyle = '#ECBC6B';
      mCtx.font = 'bold 22px monospace';
      mCtx.fillText(`⏱ ${remainingTimeFormatted}`, 860, 42);

      // Subnav
      mCtx.fillStyle = '#154A3F';
      mCtx.fillRect(0, 68, 1024, 42);
      mCtx.fillStyle = '#ECBC6B';
      mCtx.font = 'bold 16px sans-serif';
      mCtx.fillText(
        'LESEN (48p)   |   SPRACHBAUSTEINE (22p)   |   HÖREN (48p)   |   SCHREIBEN (48p)',
        24,
        95
      );

      // Split screen panels
      mCtx.fillStyle = '#FFFDF8';
      mCtx.fillRect(24, 130, 500, 380);
      mCtx.strokeStyle = '#0F372F';
      mCtx.lineWidth = 2;
      mCtx.strokeRect(24, 130, 500, 380);

      mCtx.fillStyle = '#0F372F';
      mCtx.font = 'bold 22px sans-serif';
      mCtx.fillText(variantTitle.slice(0, 38), 44, 172);
      mCtx.fillStyle = '#0F372F';
      mCtx.font = '17px sans-serif';
      mCtx.fillText('Wissenschaftlicher Lesetext & Sprachbausteine', 44, 210);
      mCtx.fillText('Klicken Sie auf die Lücken [ 1 ]–[ 6 ] und (25)–(46).', 44, 242);

      // Right status card on monitor
      mCtx.fillStyle = '#0F372F';
      mCtx.fillRect(548, 130, 452, 380);
      mCtx.strokeStyle = '#ECBC6B';
      mCtx.strokeRect(548, 130, 452, 380);

      mCtx.fillStyle = '#ECBC6B';
      mCtx.font = 'bold 24px sans-serif';
      mCtx.fillText('IHR AKTUELLER PRÜFUNGSSTAND', 574, 180);

      mCtx.fillStyle = '#FAF3E3';
      mCtx.font = 'bold 34px monospace';
      mCtx.fillText(`Antworten: ${totalAnsweredCount} / 74`, 574, 245);

      mCtx.fillStyle = '#ECBC6B';
      mCtx.font = 'bold 36px monospace';
      mCtx.fillText(`Punkte: ${grandTotal} / 166`, 574, 310);

      mCtx.fillStyle = '#FAF3E3';
      mCtx.font = 'bold 19px sans-serif';
      mCtx.fillText(`Teil 1 (LV+SP): ${part1Total}/70 Pkt. (Min. 42)`, 574, 370);
      mCtx.fillText(`Teil 2 (HV+WR): ${part2Total}/96 Pkt. (Min. 58)`, 574, 405);
    }
    const monTex = new THREE.CanvasTexture(monCanvas);
    monTex.colorSpace = THREE.SRGBColorSpace;
    monTex.anisotropy = renderer.capabilities.getMaxAnisotropy();

    // Dynamic Canvas Texture 2: Giant Auditorium Projector Screen (Beamer-Leinwand)
    const projCanvas = document.createElement('canvas');
    projCanvas.width = 1280;
    projCanvas.height = 720;
    const drawDefaultProjector = () => {
      const pCtx = projCanvas.getContext('2d');
      if (!pCtx) return;
      pCtx.fillStyle = '#0F372F';
      pCtx.fillRect(0, 0, 1280, 720);
      pCtx.strokeStyle = '#ECBC6B';
      pCtx.lineWidth = 6;
      pCtx.strokeRect(18, 18, 1244, 684);

      pCtx.fillStyle = '#ECBC6B';
      pCtx.fillRect(50, 48, 420, 52);
      pCtx.fillStyle = '#0F372F';
      pCtx.font = 'bold 26px sans-serif';
      pCtx.fillText('telc DEUTSCH C1 HOCHSCHULE', 70, 83);

      pCtx.fillStyle = '#ECBC6B';
      pCtx.font = 'bold 42px sans-serif';
      pCtx.fillText('OFFIZIELLER PRÜFUNGSABLAUF & ZEITPLAN', 50, 165);

      const rows = [
        '1. Leseverstehen & Sprachbausteine (Aufgaben 1–46)  —  90 Minuten  |  Max. 70 Punkte (Bestehensgrenze: 42 Pkt.)',
        '2. Pause                                            —  20 Minuten',
        '3. Hörverstehen Teil 1, 2 & 3 (Aufgaben 47–74)      —  ca. 40 Min. |  Max. 48 Punkte',
        '4. Schriftlicher Ausdruck (Wissenschaftl. Aufsatz)  —  70 Minuten  |  Max. 48 Punkte (Mindestens 350 Wörter)',
        '★ GESAMTERGEBNIS SCHRIFTLICHE PRÜFUNG               —  200 Min.    |  Max. 166 Punkte (Bestanden ab 100 Pkt. / 60%)'
      ];
      rows.forEach((r, i) => {
        const y = 240 + i * 85;
        pCtx.fillStyle = i === 4 ? '#ECBC6B' : '#154A3F';
        pCtx.fillRect(50, y, 1180, 66);
        pCtx.fillStyle = i === 4 ? '#0F372F' : '#ECBC6B';
        pCtx.font = 'bold 23px monospace';
        pCtx.fillText(r, 72, y + 42);
      });
    };
    drawDefaultProjector();
    const projTex = new THREE.CanvasTexture(projCanvas);
    projTex.colorSpace = THREE.SRGBColorSpace;
    projTex.anisotropy = renderer.capabilities.getMaxAnisotropy();

    // Dynamic Canvas Texture 3: S30 Answer Sheet Pad on Desk
    const s30Canvas = document.createElement('canvas');
    s30Canvas.width = 512;
    s30Canvas.height = 512;
    const sCtx = s30Canvas.getContext('2d');
    if (sCtx) {
      sCtx.fillStyle = '#FAF3E3';
      sCtx.fillRect(0, 0, 512, 512);
      sCtx.fillStyle = '#0F372F';
      sCtx.fillRect(0, 0, 512, 56);
      sCtx.fillStyle = '#ECBC6B';
      sCtx.font = 'bold 24px sans-serif';
      sCtx.fillText('telc ANTWORTBOGEN S30', 24, 36);
      for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 6; c++) {
          const idx = r * 6 + c + 1;
          sCtx.strokeStyle = '#0F372F';
          sCtx.strokeRect(24 + c * 78, 80 + r * 40, 64, 28);
          if (idx <= totalAnsweredCount) {
            sCtx.fillStyle = '#0F372F';
            sCtx.fillRect(28 + c * 78, 84 + r * 40, 56, 20);
          }
        }
      }
    }
    const s30Tex = new THREE.CanvasTexture(s30Canvas);
    s30Tex.colorSpace = THREE.SRGBColorSpace;

    const interactables: THREE.Object3D[] = [];

    // Helper to build a Composite Candidate Workstation Desk + Chair (12 parts)
    const createWorkstationGroup = (isHeroDesk: boolean) => {
      const group = new THREE.Group();
      const legGeo = new THREE.CylinderGeometry(0.055, 0.055, 1.4, 16);
      [
        [-1.45, 0.7, -0.65],
        [1.45, 0.7, -0.65],
        [-1.45, 0.7, 0.65],
        [1.45, 0.7, 0.65]
      ].forEach(([lx, ly, lz]) => {
        const leg = new THREE.Mesh(legGeo, frameMat);
        leg.position.set(lx, ly, lz);
        group.add(leg);
      });

      const topMesh = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.09, 1.6), oakMat);
      topMesh.position.set(0, 1.45, 0);
      group.add(topMesh);

      const baffleMesh = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.75, 0.06), frameMat);
      baffleMesh.position.set(0, 1.85, -0.74);
      group.add(baffleMesh);

      const standMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.18, 0.42, 20),
        darkPlasticMat
      );
      standMesh.position.set(-0.48, 1.68, -0.32);
      group.add(standMesh);

      // Monitor casing + screen plane
      const monCase = new THREE.Mesh(new THREE.BoxGeometry(1.56, 0.92, 0.06), darkPlasticMat);
      monCase.position.set(-0.48, 2.12, -0.3);
      group.add(monCase);

      const monScreen = new THREE.Mesh(
        new THREE.PlaneGeometry(1.48, 0.84),
        new THREE.MeshBasicMaterial({ map: monTex })
      );
      monScreen.position.set(-0.48, 2.12, -0.265);
      if (isHeroDesk) {
        monScreen.userData = {
          interactiveId: 'monitor',
          title: 'telc Digital C1 Imtihon Monitori',
          subtitle: `Variant ${variantId}: ${variantTitle}`,
          detail: `Belgilangan javoblar: ${totalAnsweredCount} / 74 · Hisoblangan ball: ${grandTotal} / 166 Pkt.`
        };
        interactables.push(monScreen);
      }
      group.add(monScreen);

      // Keyboard
      const kbMesh = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.03, 0.26), darkPlasticMat);
      kbMesh.position.set(-0.48, 1.51, 0.24);
      group.add(kbMesh);

      // S30 Answer Sheet Pad on Desk
      const s30Pad = new THREE.Mesh(
        new THREE.BoxGeometry(0.46, 0.015, 0.58),
        new THREE.MeshStandardMaterial({ map: s30Tex, roughness: 0.4 })
      );
      s30Pad.position.set(0.32, 1.505, 0.22);
      if (isHeroDesk) {
        s30Pad.userData = {
          interactiveId: 's30',
          title: 'telc Antwortbogen S30 (Javoblar varag‘i)',
          subtitle: '74 ta test savoli + Schriftlicher Ausdruck (Aufsatz)',
          detail: `Hozirda ${totalAnsweredCount} ta savol belgilangan. 1-Qism: ${part1Total}/70 · 2-Qism: ${part2Total}/96.`
        };
        interactables.push(s30Pad);
      }
      group.add(s30Pad);

      // Acoustic Headset (Composite 4-part Group: 2 earcups + headband arch + mic boom)
      const headsetGroup = new THREE.Group();
      headsetGroup.position.set(-1.18, 1.52, 0.18);
      const earGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.05, 20);
      const earL = new THREE.Mesh(earGeo, accentOrangeMat);
      earL.position.set(-0.1, 0.03, 0);
      const earR = new THREE.Mesh(earGeo, accentOrangeMat);
      earR.position.set(0.1, 0.03, 0);
      const arch = new THREE.Mesh(
        new THREE.TorusGeometry(0.11, 0.018, 10, 24, Math.PI),
        darkPlasticMat
      );
      arch.rotation.x = Math.PI / 2;
      arch.position.set(0, 0.04, -0.02);
      headsetGroup.add(earL, earR, arch);
      if (isHeroDesk) {
        earL.userData = earR.userData = {
          interactiveId: 'headset',
          title: 'Hörverstehen Akustik-Headset (Audio-Sinov)',
          subtitle: 'Nemis tilidagi ovozli imtihon yo‘riqnomasi ishga tushirildi',
          detail: 'Hörverstehen Teil 1 (16p), Teil 2 (20p) va Teil 3 (12p) uchun ovoz tizimi tayyor.'
        };
        interactables.push(earL, earR);
      }
      group.add(headsetGroup);

      // Ergonomic Candidate Chair behind desk
      const chairGroup = new THREE.Group();
      chairGroup.position.set(-0.45, 0, 1.15);
      const chairPedestal = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.28, 0.85, 16),
        darkPlasticMat
      );
      chairPedestal.position.y = 0.42;
      const chairSeat = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.08, 0.65), frameMat);
      chairSeat.position.y = 0.88;
      const chairBack = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.78, 0.08), frameMat);
      chairBack.position.set(0, 1.3, 0.29);
      chairGroup.add(chairPedestal, chairSeat, chairBack);
      group.add(chairGroup);

      return group;
    };

    // Main Hero Candidate Desk at center (0, 0, 0)
    const heroDesk = createWorkstationGroup(true);
    scene.add(heroDesk);

    // Neighboring Examination Hall Desks (Background Rows)
    const bgOffsets = [
      [-4.2, 0, 0],
      [4.2, 0, 0],
      [-4.2, 0, -3.2],
      [0, 0, -3.2],
      [4.2, 0, -3.2]
    ];
    bgOffsets.forEach(([bx, by, bz]) => {
      const dGroup = createWorkstationGroup(false);
      dGroup.position.set(bx, by, bz);
      scene.add(dGroup);
    });

    // Composite 6-Part Golden telc C1 Hochschule Trophy & Framed Certificate on Hero Desk
    const trophyGroup = new THREE.Group();
    trophyGroup.position.set(1.02, 1.5, -0.12);

    const basePlinth = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.32, 0.14, 24), frameMat);
    basePlinth.position.y = 0.07;
    const collarRing = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.028, 12, 32), accentOrangeMat);
    collarRing.rotation.x = Math.PI / 2;
    collarRing.position.y = 0.15;
    const stemPillar = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.11, 0.4, 20), goldMat);
    stemPillar.position.y = 0.34;
    const globeCrown = new THREE.Mesh(new THREE.OctahedronGeometry(0.22, 1), goldMat);
    globeCrown.position.y = 0.7;
    const haloRing = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.02, 12, 32), goldMat);
    haloRing.position.y = 0.7;

    [basePlinth, collarRing, stemPillar, globeCrown, haloRing].forEach((m) => {
      m.userData = {
        interactiveId: 'trophy',
        title: 'telc Deutsch C1 Hochschule · Sertifikat & Kubok',
        subtitle:
          grandTotal >= 100
            ? `TABRIKLAYMIZ! O‘tish bali bajarildi (${grandTotal} / 166 Pkt.)`
            : `Maqsad: kamida 100 / 166 ball (Hozirda: ${grandTotal} Pkt.)`,
        detail:
          'C1 Hochschule sertifikati Germaniya universitetlarida to‘liq o‘qish huquqini tasdiqlaydi.'
      };
      interactables.push(m);
    });

    trophyGroup.add(basePlinth, collarRing, stemPillar, globeCrown, haloRing);
    scene.add(trophyGroup);

    // Giant Auditorium Projector Screen at the front wall (z = -6.8)
    const projGroup = new THREE.Group();
    projGroup.position.set(0, 3.8, -6.7);
    const projFrame = new THREE.Mesh(new THREE.BoxGeometry(7.6, 4.3, 0.12), darkPlasticMat);
    const projScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(7.2, 4.05),
      new THREE.MeshBasicMaterial({ map: projTex })
    );
    projScreen.position.z = 0.07;
    projScreen.userData = {
      interactiveId: 'projector',
      title: 'Auditoriya Proyektori (Prüfungsordnung & Zeitplan)',
      subtitle: 'Rasmiy telc C1 Hochschule vaqt taqsimoti va o‘tish qoidalari',
      detail:
        'Lesen+Sprachbausteine: 90 daqiqa (min. 42/70) · Hören: 40 daqiqa · Schreiben: 70 daqiqa (min. 58/96).'
    };
    interactables.push(projScreen);
    projGroup.add(projFrame, projScreen);
    scene.add(projGroup);

    // InstancedMesh (>20 acoustic wall tiles flanking the auditorium)
    const panelCount = 24;
    const panelGeo = new THREE.BoxGeometry(1.1, 1.5, 0.1);
    const panelMat = new THREE.MeshStandardMaterial({
      color: 0x154a3f,
      roughness: 0.55,
      metalness: 0.25
    });
    const instancedPanels = new THREE.InstancedMesh(panelGeo, panelMat, panelCount);
    const dummyMat = new THREE.Matrix4();
    const dummyColor = new THREE.Color();
    for (let i = 0; i < panelCount; i++) {
      const side = i < 12 ? -1 : 1;
      const idx = i % 12;
      const col = idx % 6;
      const row = Math.floor(idx / 6);
      dummyMat.makeTranslation(side * (6.2 + col * 1.25), 1.6 + row * 1.9, -6.8);
      instancedPanels.setMatrixAt(i, dummyMat);
      dummyColor.setHex(i % 2 === 0 ? 0x0f372f : 0xecbc6b);
      instancedPanels.setColorAt(i, dummyColor);
    }
    instancedPanels.instanceMatrix.needsUpdate = true;
    if (instancedPanels.instanceColor) instancedPanels.instanceColor.needsUpdate = true;
    instancedPanels.computeBoundingSphere();
    scene.add(instancedPanels);

    // OrbitControls with smooth damping & immediate manual override
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1.85, -0.2);
    controls.enableDamping = !isSoftwareGl;
    controls.dampingFactor = 0.08;
    controls.maxPolarAngle = Math.PI / 2 - 0.04;
    controls.minDistance = 1.4;
    controls.maxDistance = 16;

    if (!isSoftwareGl) {
      renderer.compile(scene, camera);
    }

    // Camera Transition State (Cancels immediately when user drags with mouse!)
    let isTransitioningCamera = true;
    const targetCamPos = new THREE.Vector3(0, 2.65, 2.85);
    const targetLookAt = new THREE.Vector3(-0.15, 1.92, -0.25);
    let trophySpinBoost = 0;

    const setCameraTargetForPreset = (preset: CameraPresetId) => {
      isTransitioningCamera = true;
      if (preset === 'desk') {
        targetCamPos.set(0, 2.65, 2.85);
        targetLookAt.set(-0.15, 1.92, -0.25);
      } else if (preset === 'projector') {
        targetCamPos.set(0, 3.6, -0.5);
        targetLookAt.set(0, 3.8, -6.7);
      } else if (preset === 'trophy') {
        targetCamPos.set(1.55, 2.35, 1.45);
        targetLookAt.set(1.02, 1.95, -0.12);
        trophySpinBoost = 4.0;
      } else {
        targetCamPos.set(-4.8, 5.2, 6.6);
        targetLookAt.set(0, 2.0, -2.2);
      }
      requestRender();
    };

    // Cancel scripted camera transition immediately when user starts orbiting/dragging!
    const onControlStart = () => {
      isTransitioningCamera = false;
    };
    controls.addEventListener('start', onControlStart);

    // Raycasting for clicking 3D objects (Monitor, Headset, Trophy, Projector, S30)
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let pointerDownPos = { x: 0, y: 0 };

    const onPointerDown = (e: PointerEvent) => {
      pointerDownPos = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = (e: PointerEvent) => {
      const dist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
      if (dist > 6) return; // Was a drag/orbit, not a click
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(interactables, false);
      if (hits.length > 0) {
        const data = hits[0].object.userData;
        if (data?.title) {
          setSelectedObjectInfo({
            title: data.title,
            subtitle: data.subtitle,
            detail: data.detail
          });
        }
        if (data?.interactiveId === 'headset') {
          playHallAudioCheck(
            'Herzlich willkommen zur Prüfung telc Deutsch C1 Hochschule. Ihr Kopfhörer ist optimal eingestellt. Viel Erfolg!'
          );
        } else if (data?.interactiveId === 'trophy') {
          setCameraPreset('trophy');
          setCameraTargetForPreset('trophy');
        } else if (data?.interactiveId === 'projector') {
          setCameraPreset('projector');
          setCameraTargetForPreset('projector');
        } else if (data?.interactiveId === 'monitor') {
          setCameraPreset('desk');
          setCameraTargetForPreset('desk');
        }
      }
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointerup', onPointerUp);

    // Keyboard WASD / Arrow keys support to move around the hall
    const onKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      const step = 0.35;
      if (e.key === 'w' || e.key === 'ArrowUp') {
        isTransitioningCamera = false;
        camera.position.z -= step;
        controls.target.z -= step;
        requestRender();
      } else if (e.key === 's' || e.key === 'ArrowDown') {
        isTransitioningCamera = false;
        camera.position.z += step;
        controls.target.z += step;
        requestRender();
      } else if (e.key === 'a' || e.key === 'ArrowLeft') {
        isTransitioningCamera = false;
        camera.position.x -= step;
        controls.target.x -= step;
        requestRender();
      } else if (e.key === 'd' || e.key === 'ArrowRight') {
        isTransitioningCamera = false;
        camera.position.x += step;
        controls.target.x += step;
        requestRender();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    let frameId = 0;
    let renderBusy = false;
    let renderDirty = false;
    let isUpdatingControls = false;

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          if (sync) gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    function requestRender() {
      if (renderBusy) {
        renderDirty = true;
        return;
      }
      renderBusy = true;
      frameId = requestAnimationFrame(() => {
        renderDirty = false;

        // Smooth camera transition until target is reached
        if (isTransitioningCamera) {
          const stepFactor = isSoftwareGl ? 0.65 : 0.22;
          camera.position.lerp(targetCamPos, stepFactor);
          controls.target.lerp(targetLookAt, stepFactor);
          if (
            camera.position.distanceTo(targetCamPos) < 0.05 &&
            controls.target.distanceTo(targetLookAt) < 0.05
          ) {
            camera.position.copy(targetCamPos);
            controls.target.copy(targetLookAt);
            isTransitioningCamera = false;
          } else {
            renderDirty = true;
          }
        }

        // Trophy subtle spin on click
        if (trophySpinBoost > 0.08) {
          globeCrown.rotation.y += 0.18 * trophySpinBoost;
          haloRing.rotation.z += 0.12 * trophySpinBoost;
          trophySpinBoost *= isSoftwareGl ? 0.5 : 0.85;
          renderDirty = true;
        } else {
          trophySpinBoost = 0;
        }

        isUpdatingControls = true;
        controls.update();
        isUpdatingControls = false;

        renderer.render(scene, camera);

        const done = () => {
          renderBusy = false;
          if (renderDirty) requestRender();
        };
        if (isSoftwareGl) afterDraw(done);
        else done();
      });
    }

    const onControlsChange = () => {
      if (!isUpdatingControls) {
        requestRender();
      }
    };

    triggerPresetRef.current = setCameraTargetForPreset;
    triggerThemeRef.current = (theme: FinishThemeId) => {
      if (theme === 'navy') {
        frameMat.color.setHex(0x0f372f);
      } else if (theme === 'platinum') {
        frameMat.color.setHex(0x154a3f);
      } else {
        frameMat.color.setHex(0xecbc6b);
      }
      requestRender();
    };

    updateProjectorImageRef.current = (dataUrl: string) => {
      const img = new Image();
      img.onload = () => {
        const pCtx = projCanvas.getContext('2d');
        if (pCtx) {
          pCtx.drawImage(img, 0, 0, projCanvas.width, projCanvas.height);
          projTex.needsUpdate = true;
          setCameraPreset('projector');
          setCameraTargetForPreset('projector');
        }
      };
      img.src = dataUrl;
    };

    controls.addEventListener('change', onControlsChange);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      requestRender();
    };
    window.addEventListener('resize', handleResize);
    requestRender();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', onKeyDown);
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.domElement.removeEventListener('pointerup', onPointerUp);
      controls.removeEventListener('start', onControlStart);
      controls.removeEventListener('change', onControlsChange);
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      controls.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isOpen]);

  const handleSelectCameraPreset = (preset: CameraPresetId) => {
    setCameraPreset(preset);
    triggerPresetRef.current?.(preset);
  };

  const handleSelectTheme = (theme: FinishThemeId) => {
    setFinishTheme(theme);
    triggerThemeRef.current?.(theme);
  };

  const handleGenerateTopicVisual = async () => {
    setGenLoading(true);
    setGenInfoMsg('');
    try {
      const res = await fetch('/api/ai/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: imagePrompt,
          imageSize
        })
      });
      const data = await res.json();
      if (res.ok && data.imageUrl) {
        setGenImageUrl(data.imageUrl);
        updateProjectorImageRef.current?.(data.imageUrl);
        setGenInfoMsg(`✅ ${imageSize} tasvir yaratildi va 3D zal proyektoriga joylandi!`);
      } else {
        // Fallback: generate high-resolution 1K/2K/4K C1 Study Infographic Poster locally & project it onto the 3D screen!
        const posterUrl = generateLocalStudyPoster(imageSize, imagePrompt);
        setGenImageUrl(posterUrl);
        updateProjectorImageRef.current?.(posterUrl);
        setGenInfoMsg(
          `✅ ${imageSize} C1 O‘quv-Infografika posteri yaratildi va 3D zal proyektoriga chiqarildi!`
        );
      }
    } catch {
      const posterUrl = generateLocalStudyPoster(imageSize, imagePrompt);
      setGenImageUrl(posterUrl);
      updateProjectorImageRef.current?.(posterUrl);
      setGenInfoMsg(
        `✅ ${imageSize} C1 O‘quv-Infografika posteri yaratildi va 3D zal proyektoriga chiqarildi!`
      );
    } finally {
      setGenLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 w-screen h-screen bg-[#0A2620] overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="3D telc Prüfungszentrum"
    >
      {/* Dedicated WebGL Mount Container outside React HUD overlays */}
      <div
        ref={canvasMountRef}
        data-testid="exam-hall-3d-canvas"
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Top Status & Interactive Object Callout Bar */}
      <div className="fixed top-4 left-4 right-4 z-10 flex flex-wrap items-start justify-between gap-3 pointer-events-none">
        <div className="pointer-events-auto bg-[#0F372F] text-[#ECBC6B] px-4 py-3 rounded-xl border border-[#ECBC6B] shadow-2xl max-w-xl">
          <div className="flex items-center gap-2 text-[11px] font-mono-tabular uppercase tracking-wider text-[#ECBC6B]/90">
            <Monitor className="w-3.5 h-3.5 text-[#ECBC6B]" />
            <span>{selectedObjectInfo?.title || 'telc C1 Hochschule · 3D Imtihon Zali'}</span>
          </div>
          <div className="text-sm font-extrabold text-[#ECBC6B] mt-0.5">
            {selectedObjectInfo?.subtitle}
          </div>
          <div className="text-xs text-[#FAF3E3] mt-1">{selectedObjectInfo?.detail}</div>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() =>
              playHallAudioCheck(
                `Herzlich willkommen im Prüfungszentrum telc Deutsch C1 Hochschule. Sie bearbeiten aktuell ${variantTitle}. Viel Erfolg bei der Prüfung!`
              )
            }
            className="px-3.5 py-2 rounded-lg bg-[#0F372F] hover:bg-[#154A3F] border border-[#ECBC6B] text-[#ECBC6B] text-xs font-extrabold flex items-center gap-1.5 shadow-lg cursor-pointer"
          >
            <Volume2 className="w-4 h-4 text-[#ECBC6B]" />
            <span>Audio-Test (Nemischa)</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#ECBC6B] hover:bg-[#DFAB52] text-[#0F372F] text-xs font-extrabold flex items-center gap-1.5 shadow-lg cursor-pointer"
          >
            <X className="w-4 h-4" />
            <span>Imtihonga qaytish</span>
          </button>
        </div>
      </div>

      {/* Visual Topic Card / Infographic Generator Panel */}
      {showImagePanel && (
        <div className="fixed top-24 right-4 z-10 w-96 max-w-[92vw] bg-[#0F372F] text-[#ECBC6B] border border-[#ECBC6B] rounded-xl p-4 shadow-2xl space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#ECBC6B]">
              <Sparkles className="w-4 h-4 text-[#ECBC6B]" />
              <span>C1 Vizual Karta & Proyektor (1K / 2K / 4K)</span>
            </div>
            <button
              type="button"
              onClick={() => setShowImagePanel(false)}
              className="text-[#ECBC6B]/80 hover:text-[#ECBC6B]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <input
            type="text"
            value={imagePrompt}
            onChange={(e) => setImagePrompt(e.target.value)}
            className="w-full px-3 py-1.5 rounded bg-[#154A3F] border border-[#ECBC6B]/60 text-xs text-[#ECBC6B] focus:outline-none"
            placeholder="Mavzu yoki kalit so'z kiriting..."
          />

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 text-xs">
              <span className="text-[#ECBC6B]/85 mr-1">O‘lcham:</span>
              {(['1K', '2K', '4K'] as const).map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => setImageSize(sz)}
                  className={`px-2.5 py-1 rounded font-mono-tabular font-bold cursor-pointer ${
                    imageSize === sz
                      ? 'bg-[#ECBC6B] text-[#0F372F]'
                      : 'bg-[#154A3F] text-[#ECBC6B] hover:bg-[#ECBC6B]/20'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>

            <button
              type="button"
              disabled={genLoading}
              onClick={handleGenerateTopicVisual}
              className="px-3 py-1.5 rounded bg-[#ECBC6B] hover:bg-[#DFAB52] text-[#0F372F] text-xs font-extrabold cursor-pointer"
            >
              {genLoading ? 'Yaratilmoqda...' : 'Yaratish & Proyektorga chiqarish'}
            </button>
          </div>

          {genInfoMsg && (
            <div className="p-2 rounded bg-[#154A3F] border border-[#ECBC6B] text-[#ECBC6B] text-xs">
              {genInfoMsg}
            </div>
          )}

          {genImageUrl && (
            <div className="space-y-2">
              <div className="rounded overflow-hidden border border-[#ECBC6B] bg-[#0A2620]">
                <img
                  src={genImageUrl}
                  alt="Generierte C1 Themen-Illustration"
                  referrerPolicy="no-referrer"
                  className="w-full h-44 object-cover"
                />
              </div>
              <a
                href={genImageUrl}
                download={`telc_C1_Variant_${variantId}_${imageSize}.png`}
                className="w-full py-1.5 rounded bg-[#ECBC6B] hover:bg-[#DFAB52] text-[#0F372F] text-xs font-extrabold flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-[#0F372F]" />
                <span>{imageSize} Poster sifatida yuklab olish</span>
              </a>
            </div>
          )}
        </div>
      )}

      {/* Unified Collapsible Bottom Control Dock (No backdrop-filter over WebGL) */}
      <div
        style={{
          bottom: '18px',
          left: '50%',
          transform: 'translateX(-50%)',
          maxWidth: 'min(960px, 95vw)'
        }}
        className="fixed z-10 w-full flex flex-col items-center pointer-events-none"
      >
        <button
          type="button"
          onClick={() => setDockCollapsed((c) => !c)}
          className="pointer-events-auto px-3.5 py-1 rounded-t-lg bg-[#0F372F] text-[#ECBC6B] border border-b-0 border-[#ECBC6B] text-xs font-extrabold flex items-center gap-1 cursor-pointer"
        >
          {dockCollapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          <span>{dockCollapsed ? '3D Boshqaruvni ochish' : 'Panelni yashirish'}</span>
        </button>

        {!dockCollapsed && (
          <div className="pointer-events-auto w-full bg-[#0F372F] text-[#ECBC6B] border border-[#ECBC6B] rounded-xl px-4 py-3 shadow-2xl flex flex-wrap items-center justify-between gap-3">
            {/* 4 Interactive Camera Presets */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <Camera className="w-4 h-4 text-[#ECBC6B] mr-0.5" />
              <span className="text-xs text-[#ECBC6B]/85 font-semibold mr-1">Kamera:</span>
              {[
                { id: 'desk', label: '1. Mening Joyim' },
                { id: 'projector', label: '2. Doska / Proyektor' },
                { id: 'trophy', label: '3. C1 Kubok' },
                { id: 'hall', label: '4. Imtihon Zali' }
              ].map((cam) => (
                <button
                  key={cam.id}
                  type="button"
                  onClick={() => handleSelectCameraPreset(cam.id as CameraPresetId)}
                  className={`px-2.5 py-1.5 rounded text-xs font-extrabold transition-colors cursor-pointer ${
                    cameraPreset === cam.id
                      ? 'bg-[#ECBC6B] text-[#0F372F] border border-[#ECBC6B]'
                      : 'bg-[#154A3F] text-[#ECBC6B] border border-[#ECBC6B]/40 hover:bg-[#ECBC6B]/20'
                  }`}
                >
                  {cam.label}
                </button>
              ))}
            </div>

            {/* Finish Swatches */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-[#ECBC6B]/85 font-semibold mr-1">Dizayn:</span>
              {[
                { id: 'navy', label: 'Storm Green' },
                { id: 'platinum', label: 'Emerald' },
                { id: 'gold', label: 'Luscious Lemon' }
              ].map((fin) => (
                <button
                  key={fin.id}
                  type="button"
                  onClick={() => handleSelectTheme(fin.id as FinishThemeId)}
                  className={`px-2.5 py-1.5 rounded text-xs font-extrabold transition-colors cursor-pointer ${
                    finishTheme === fin.id
                      ? 'bg-[#ECBC6B] text-[#0F372F]'
                      : 'bg-[#154A3F] text-[#ECBC6B] border border-[#ECBC6B]/40 hover:bg-[#ECBC6B]/20'
                  }`}
                >
                  {fin.label}
                </button>
              ))}
            </div>

            {/* Visual Topic Card Generator Toggle */}
            <button
              type="button"
              onClick={() => setShowImagePanel((v) => !v)}
              className="px-3 py-1.5 rounded bg-[#ECBC6B] hover:bg-[#DFAB52] text-[#0F372F] text-xs font-extrabold flex items-center gap-1.5 cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#0F372F]" />
              <span>Vizual Karta (1K/2K/4K)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
