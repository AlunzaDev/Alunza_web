import { useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import {
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  ChartPie,
  Landmark,
  Monitor,
  UsersRound,
} from 'lucide-react'

/* ─────────────────────────────────────────────────────────────────────────── */
/*  DATOS                                                                       */
/* ─────────────────────────────────────────────────────────────────────────── */

const pillars = [
  { label: 'Estrategia',    icon: Landmark },
  { label: 'Administración',icon: BriefcaseBusiness },
  { label: 'Capital humano',icon: UsersRound },
  { label: 'Finanzas',      icon: ChartPie },
  { label: 'Tecnología',    icon: Monitor },
  { label: 'Gestión',       icon: ChartNoAxesColumnIncreasing },
]

/* ─────────────────────────────────────────────────────────────────────────── */
/*  APP                                                                         */
/* ─────────────────────────────────────────────────────────────────────────── */

export default function App() {
  /*
   * `progress` sube de 0→1 mientras se scrollea de arriba a abajo.
   * No usamos useScroll de framer-motion para tener control total.
   * El progreso puede ir en ambas direcciones (animación reversa al subir).
   */
  const progress = useMotionValue(0)

  useEffect(() => {
    function onScroll() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (maxScroll <= 0) return
      progress.set(Math.min(Math.max(window.scrollY / maxScroll, 0), 1))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [progress])

  /* ── ACT 1: Overlay con logo grande ───────────────────────────────────── */
  /*  0.00 → 0.18: el overlay cubre todo y el logo flota                      */
  /*  0.14 → 0.22: overlay se desvanece (logo escala y sube)                  */
  const ov1Opacity = useTransform(progress, [0,    0.14, 0.22], [1, 1, 0])
  const ov1Scale   = useTransform(progress, [0,    0.08, 0.22], [1, 1.06, 0.5])
  const ov1Y       = useTransform(progress, [0,    0.08, 0.22], [0, -12, -180])

  /* ── ACT 2: Headline épico (pantalla completa, stagger por línea) ──────── */
  /*  Cada línea entra desde abajo con desfase, luego todas salen juntas       */
  /*  arriba. El reverso también se anima (salen por abajo, entran por arriba) */

  // Línea 0 — "Construimos" (primera en entrar, última en salir al subir)
  const l0Op = useTransform(progress, [0.20, 0.27, 0.38, 0.44], [0, 1, 1, 0])
  const l0Y  = useTransform(progress, [0.20, 0.27, 0.38, 0.44], [90, 0, 0, -70])

  // Línea 1 — "procesos sólidos"
  const l1Op = useTransform(progress, [0.225, 0.295, 0.38, 0.44], [0, 1, 1, 0])
  const l1Y  = useTransform(progress, [0.225, 0.295, 0.38, 0.44], [90, 0, 0, -70])

  // Línea 2 — "para impulsar"
  const l2Op = useTransform(progress, [0.25, 0.32, 0.38, 0.44], [0, 1, 1, 0])
  const l2Y  = useTransform(progress, [0.25, 0.32, 0.38, 0.44], [90, 0, 0, -70])

  // Línea 3 — "organizaciones sólidas." (última en entrar, primera en salir al subir)
  const l3Op = useTransform(progress, [0.275, 0.345, 0.38, 0.44], [0, 1, 1, 0])
  const l3Y  = useTransform(progress, [0.275, 0.345, 0.38, 0.44], [90, 0, 0, -70])

  /* ── ACT 3: Headline pequeño + párrafos ────────────────────────────────── */
  /*  Aparece al llegar a Act 3, se va en Act 4, vuelve en Act 5 (final)       */
  const hOp = useTransform(
    progress,
    [0.44, 0.52,  0.58, 0.65,  0.80, 0.87],
    [0,    1,     1,    0,     0,    1   ]
  )
  const hY = useTransform(
    progress,
    [0.44, 0.52,  0.58, 0.65,  0.80, 0.87],
    [30,   0,     0,   -20,    20,   0   ]
  )

  // Divisor azul
  const dvOp  = useTransform(
    progress,
    [0.48, 0.54,  0.58, 0.65,  0.80, 0.87],
    [0,    1,     1,    0,     0,    1   ]
  )
  const dvScX = useTransform(progress, [0.48, 0.54], [0, 1])

  // Párrafos (aparecen en Act 3, se quedan hasta el final)
  const pOp = useTransform(progress, [0.50, 0.58], [0, 1])
  const pY  = useTransform(progress, [0.50, 0.58], [32, 0])

  /* ── ACT 4: Pilares (stagger individual por columna) ───────────────────── */
  const p0Op = useTransform(progress, [0.62, 0.69], [0, 1])
  const p0Y  = useTransform(progress, [0.62, 0.69], [28, 0])
  const p1Op = useTransform(progress, [0.635, 0.705], [0, 1])
  const p1Y  = useTransform(progress, [0.635, 0.705], [28, 0])
  const p2Op = useTransform(progress, [0.65, 0.72], [0, 1])
  const p2Y  = useTransform(progress, [0.65, 0.72], [28, 0])
  const p3Op = useTransform(progress, [0.665, 0.735], [0, 1])
  const p3Y  = useTransform(progress, [0.665, 0.735], [28, 0])
  const p4Op = useTransform(progress, [0.68, 0.75], [0, 1])
  const p4Y  = useTransform(progress, [0.68, 0.75], [28, 0])
  const p5Op = useTransform(progress, [0.695, 0.765], [0, 1])
  const p5Y  = useTransform(progress, [0.695, 0.765], [28, 0])

  /* ── ACT 5: Logo pequeño, tagline y footer ─────────────────────────────── */
  const brandOp = useTransform(progress, [0.80, 0.87], [0, 1])
  const brandY  = useTransform(progress, [0.80, 0.87], [-22, 0])

  const ftOp = useTransform(progress, [0.83, 0.91], [0, 1])
  const ftY  = useTransform(progress, [0.83, 0.91], [38, 0])

  /* ── Arrays para iterar en JSX (sin llamar hooks en loops) ─────────────── */
  const bigLines = [
    { op: l0Op, y: l0Y, text: 'Construimos',          strong: false },
    { op: l1Op, y: l1Y, text: 'procesos sólidos',      strong: true  },
    { op: l2Op, y: l2Y, text: 'para impulsar',         strong: false },
    { op: l3Op, y: l3Y, text: 'organizaciones sólidas.',strong: true  },
  ]

  const pillarMotion = [
    { op: p0Op, y: p0Y },
    { op: p1Op, y: p1Y },
    { op: p2Op, y: p2Y },
    { op: p3Op, y: p3Y },
    { op: p4Op, y: p4Y },
    { op: p5Op, y: p5Y },
  ]

  /* ─────────────────────────────────────────────────────────────────────── */
  return (
    <>
      {/* Spacer: 600 vh crean el espacio de scroll para los 5 actos */}
      <div aria-hidden="true" style={{ height: '600vh' }} />

      {/* Contenedor fixed: SIEMPRE en el viewport, nunca puede desaparecer */}
      <div className="fixed inset-0 isolate overflow-hidden bg-white">

        {/* ── Fondos decorativos ─────────────────────────────────────── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_47%,rgba(0,83,181,0.11),transparent_18%),linear-gradient(180deg,#ffffff_0%,#ffffff_66%,#eef6ff_100%)]"
        />
        <div
          aria-hidden="true"
          className="alunza-horizon pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[24vh] min-h-32 overflow-hidden"
        />

        {/* ── LAYOUT BASE (Acts 3-5 y estado final) ─────────────────── */}
        <div className="flex h-full flex-col items-center justify-between px-4 pb-3 pt-4 text-center sm:px-8 sm:pb-4 sm:pt-5 lg:px-12">

          {/* Logo pequeño — Act 5 */}
          <motion.img
            style={{ opacity: brandOp, y: brandY }}
            src="/ALUNZA-LOGO-BLACK_TXT.png"
            alt="Alunza Corporativo"
            className="brand-lockup w-full max-w-[132px] object-contain sm:max-w-[205px] lg:max-w-[245px]"
          />

          {/* Bloque central */}
          <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center">

            {/* Headline pequeño — Act 3 + Act 5 */}
            <motion.div
              style={{ opacity: hOp, y: hY }}
              className="flex w-full flex-col items-center"
            >
              <h1 className="hero-headline max-w-5xl text-balance text-[clamp(1.45rem,7vw,3.25rem)] font-light leading-[1.08] tracking-normal text-[#050b24] sm:text-[clamp(1.85rem,3.6vw,3.25rem)]">
                Construimos <strong>procesos sólidos</strong>
                <br />
                para impulsar <strong>organizaciones sólidas.</strong>
              </h1>
              <motion.span
                style={{ opacity: dvOp, scaleX: dvScX }}
                className="mt-2 block h-px w-16 origin-center bg-[#0052bc] sm:mt-3 sm:w-20"
              />
            </motion.div>

            {/* Párrafos — Act 3 → final */}
            <motion.div
              style={{ opacity: pOp, y: pY }}
              className="hero-copy mt-3 max-w-3xl space-y-1.5 text-balance text-[0.76rem] leading-[1.35] text-[#151b35] sm:mt-4 sm:space-y-2 sm:text-[clamp(0.86rem,1.05vw,1rem)] sm:leading-[1.45]"
            >
              <p>
                En ALUNZA integramos las capacidades corporativas que fortalecen la
                operación y el desarrollo de un grupo empresarial.
              </p>
              <p>
                Bajo una visión compartida de colaboración, eficiencia y mejora
                continua, impulsamos el crecimiento mediante una gestión profesional,
                procesos confiables y una dirección estratégica orientada al futuro.
              </p>
            </motion.div>

            {/* Pilares — Act 4 → final (stagger individual) */}
            <div className="pillar-grid mt-4 grid w-full max-w-5xl grid-cols-2 gap-y-3 sm:grid-cols-3 lg:mt-5 lg:grid-cols-6 lg:gap-y-0">
              {pillars.map(({ label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  className="pillar"
                  style={{ opacity: pillarMotion[i].op, y: pillarMotion[i].y }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      delay: i * 0.1,
                      duration: 4.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <Icon aria-hidden="true" size={32} strokeWidth={1.8} />
                    <span>{label}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer / tagline — Act 5 */}
          <motion.footer
            style={{ opacity: ftOp, y: ftY }}
            className="relative z-10 w-full"
          >
            <p className="tagline mx-auto max-w-4xl text-balance text-[0.86rem] font-light leading-[1.35] tracking-[0.16em] text-[#12162d] sm:text-[clamp(1rem,1.85vw,1.45rem)] sm:leading-[1.45] sm:tracking-[0.22em]">
              ALUNZA no es una marca.
              <br />
              Es un movimiento <span className="tagline-blue">hacia arriba.</span>
            </p>
            <div className="mt-2 flex items-center justify-center gap-3 text-[0.68rem] text-[#1b223d] sm:mt-3 sm:gap-4 sm:text-sm">
              <span>© 2009 Alunza Corporativo</span>
              <span className="h-4 w-px bg-[#0052bc]" />
              <span>Sitio institucional</span>
            </div>
          </motion.footer>
        </div>

        {/* ── ACT 2: Headline épico (overlay z-10) ──────────────────── */}
        {/*  Cada línea entra desde abajo con stagger.                    */}
        {/*  "procesos sólidos" y "organizaciones sólidas." en azul.      */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 sm:px-16 lg:px-24"
        >
          <div className="w-full max-w-5xl">
            {bigLines.map(({ op, y, text, strong }) => (
              <motion.div
                key={text}
                style={{ opacity: op, y }}
                className={[
                  'block leading-[1.05] tracking-tight',
                  'text-[clamp(2.4rem,6.5vw,5.8rem)]',
                  strong
                    ? 'font-semibold text-[#004db3]'
                    : 'font-light text-[#050b24]',
                ].join(' ')}
              >
                {text}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── ACT 1: Overlay intro logo (z-20, encima de todo) ──────── */}
        {/*  El logo se "ensambla" en 3 piezas al cargar la página:           */}
        {/*  1) Ícono azul cae con rebote  2) ALUNZA barre  3) CORP expande  */}
        <motion.div
          style={{ opacity: ov1Opacity }}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-white"
        >
          {/* Wrapper: escala + Y controlados por scroll (exit animation) */}
          <motion.div style={{ scale: ov1Scale, y: ov1Y }} className="logo-intro">

            {/* 1. Ícono azul — cae desde arriba con spring bounce */}
            {/*    Flotación idle empieza a los 1.2 s (tras el ensamblado) */}
            <motion.img
              className="logo-icon"
              src="/ALUNZA LOGO FAVICON.png"
              alt=""
              aria-hidden="true"
              animate={{ y: [0, -14, 0] }}
              transition={{ delay: 1.2, duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* 2. ALUNZA.png — fuente original, barre de izquierda a derecha */}
            <img
              className="logo-alunza-img"
              src="/ALUNZA.png"
              alt="ALUNZA"
              aria-hidden="true"
            />

            {/* 3. CORPORATIVO.png — fuente original, sube con fade */}
            <img
              className="logo-corp-img"
              src="/CORPORATIVO.png"
              alt="Corporativo"
              aria-hidden="true"
            />

          </motion.div>
        </motion.div>

      </div>
    </>
  )
}
