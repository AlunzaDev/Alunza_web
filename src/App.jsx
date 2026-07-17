import { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion'
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
/*  HOOK: prefers-reduced-motion                                                */
/*  Detecta la preferencia del sistema y reacciona si cambia en vivo.           */
/* ─────────────────────────────────────────────────────────────────────────── */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  VERSIÓN ESTÁTICA (prefers-reduced-motion: reduce)                           */
/*  Mismo contenido y estilos finales, sin scroll-jacking ni animaciones.       */
/*  Ocupa el flujo normal del documento (sin position: fixed ni spacer 600vh).  */
/* ─────────────────────────────────────────────────────────────────────────── */

function StaticLanding() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_47%,rgba(0,83,181,0.11),transparent_18%),linear-gradient(180deg,#ffffff_0%,#ffffff_66%,#eef6ff_100%)]"
      />
      <div
        aria-hidden="true"
        className="alunza-horizon pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[24vh] min-h-32 overflow-hidden"
      />

      <div className="flex min-h-screen flex-col items-center justify-between gap-8 px-4 py-8 text-center sm:px-8 sm:py-10 lg:px-12">
        <img
          src="/ALUNZA-LOGO-BLACK_TXT.png"
          alt="Alunza Corporativo"
          className="w-full max-w-[132px] object-contain sm:max-w-[205px] lg:max-w-[245px]"
        />

        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center">
            <h1 className="max-w-5xl -translate-y-4 text-balance text-[clamp(1.45rem,7vw,3.25rem)] font-light leading-[1.08] tracking-normal text-[#050b24] sm:text-[clamp(1.85rem,3.6vw,3.25rem)]">
              Construimos <strong>procesos sólidos</strong>
              <br />
              para impulsar <strong>organizaciones sólidas.</strong>
            </h1>
            <span className="mt-2 block h-px w-16 bg-[#0052bc] sm:mt-3 sm:w-20" />
          </div>

          <div className="mt-3 max-w-3xl space-y-1.5 text-balance text-[0.76rem] leading-[1.35] text-[#151b35] sm:mt-4 sm:space-y-2 sm:text-[clamp(0.86rem,1.05vw,1rem)] sm:leading-[1.45]">
            <p>
              En ALUNZA integramos las capacidades corporativas que fortalecen la
              operación y el desarrollo de un grupo empresarial.
            </p>
            <p>
              Bajo una visión compartida de colaboración, eficiencia y mejora
              continua, impulsamos el crecimiento mediante una gestión profesional,
              procesos confiables y una dirección estratégica orientada al futuro.
            </p>
          </div>

          <div className="pillar-grid mt-4 grid w-full max-w-5xl grid-cols-2 gap-y-3 sm:grid-cols-3 lg:mt-5 lg:grid-cols-6 lg:gap-y-0">
            {pillars.map(({ label, icon: Icon }) => (
              <div key={label} className="pillar">
                <div className="flex flex-col items-center gap-1.5">
                  <Icon aria-hidden="true" size={32} strokeWidth={1.8} />
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="relative z-10 w-full">
          <p className="tagline mx-auto max-w-4xl text-balance text-[0.86rem] font-light leading-[1.35] tracking-[0.16em] text-[#12162d] sm:text-[clamp(1rem,1.85vw,1.45rem)] sm:leading-[1.45] sm:tracking-[0.22em]">
            ALUNZA no es una marca.
            <br />
            Es un movimiento <span className="tagline-blue">hacia arriba.</span>
          </p>
          <div className="mt-2 flex items-center justify-center gap-3 text-[0.68rem] text-[#1b223d] sm:mt-3 sm:gap-4 sm:text-sm">
            <span>© 2009 Alunza Corporativo</span>
            <span className="h-4 w-px bg-[#0052bc]" />
            <span>Más de 15 años</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  APP                                                                         */
/* ─────────────────────────────────────────────────────────────────────────── */

export default function App() {
  const prefersReducedMotion = usePrefersReducedMotion()

  const progress = useMotionValue(0)

  /* Scroll al top en cada refresh — evita que el browser restaure posición */
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return
    function onScroll() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (maxScroll <= 0) return
      progress.set(Math.min(Math.max(window.scrollY / maxScroll, 0), 1))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [progress, prefersReducedMotion])

  /* ── ACT 0: solo el ícono al cargar. ALUNZA y CORP entran por scroll ──────── */
  /*  0.04 → 0.12 — ALUNZA se descubre de izq a der                          */
  /*  0.09 → 0.17 — CORPORATIVO sube con fade                                */
  /*  0.17 → 0.22 — hold: los 3 juntos, visibles                            */
  /*  0.22 → 0.30 — exit: logo se encoge y sube                             */
  const alunzaW  = useTransform(progress, [0.04, 0.12], ['0%', '100%'])
  const corpOp   = useTransform(progress, [0.09, 0.17], [0, 1])
  const corpYpx  = useTransform(progress, [0.09, 0.17], [16, 0])
  const ov1Opacity = useTransform(progress, [0.22, 0.30], [1, 0])
  const ov1Scale   = useTransform(progress, [0.22, 0.30], [1, 0.5])
  const ov1Y       = useTransform(progress, [0.22, 0.30], [0, -180])

  /* ── ACT 2: Headline épico ──────────────────────────────────────────────── */
  // Línea 0 — "Construimos"
  const l0Op = useTransform(progress, [0.30, 0.37, 0.45, 0.52], [0, 1, 1, 0])
  const l0Y  = useTransform(progress, [0.30, 0.37, 0.45, 0.52], [90, 0, 0, -70])
  const l0Sc = useTransform(progress, [0.45, 0.52], [1, 0.9])
  // Línea 1 — "procesos sólidos"
  const l1Op = useTransform(progress, [0.32, 0.39, 0.45, 0.52], [0, 1, 1, 0])
  const l1Y  = useTransform(progress, [0.32, 0.39, 0.45, 0.52], [90, 0, 0, -70])
  const l1Sc = useTransform(progress, [0.45, 0.52], [1, 0.9])
  // Línea 2 — "para impulsar"
  const l2Op = useTransform(progress, [0.34, 0.41, 0.45, 0.52], [0, 1, 1, 0])
  const l2Y  = useTransform(progress, [0.34, 0.41, 0.45, 0.52], [90, 0, 0, -70])
  const l2Sc = useTransform(progress, [0.45, 0.52], [1, 0.9])
  // Línea 3 — "organizaciones sólidas."
  const l3Op = useTransform(progress, [0.36, 0.43, 0.45, 0.52], [0, 1, 1, 0])
  const l3Y  = useTransform(progress, [0.36, 0.43, 0.45, 0.52], [90, 0, 0, -70])
  const l3Sc = useTransform(progress, [0.45, 0.52], [1, 0.9])

  /* ── ACT 3: Párrafos — blur-to-focus individual ──────────────────────────── */
  /*  Efecto: cada párrafo emerge del desenfoque al foco nítido, uno a uno.   */
  /*  Completamente distinto al Acto 2 (que usaba slides verticales).         */

  // Párrafo 1: aparece desenfocado y se aclara
  const par1Op    = useTransform(progress, [0.50, 0.58], [0, 1])
  const par1BlurN = useTransform(progress, [0.50, 0.58], [10, 0])
  const par1Blur  = useMotionTemplate`blur(${par1BlurN}px)`

  // Párrafo 2: lo mismo, ligeramente desfasado
  const par2Op    = useTransform(progress, [0.56, 0.64], [0, 1])
  const par2BlurN = useTransform(progress, [0.56, 0.64], [10, 0])
  const par2Blur  = useMotionTemplate`blur(${par2BlurN}px)`
  const copyY      = useTransform(progress, [0.50, 0.68, 0.78, 0.88], [-105, -105, -20, 0])
  const copyScale  = useTransform(progress, [0.50, 0.68, 0.78, 0.88], [1.3, 1.3, 1.08, 1])

  /* Headline — solo en el estado final (Act 5). En Act 3 no aparece.        */
  const hOp = useTransform(progress, [0.82, 0.88], [0, 1])
  const hY  = useTransform(progress, [0.82, 0.88], [-36, -16])

  /* ── ACT 4: Pilares (stagger individual por columna) ───────────────────── */
  const p0Op = useTransform(progress, [0.68, 0.74], [0, 1])
  const p0Y  = useTransform(progress, [0.68, 0.74], [28, 0])
  const p1Op = useTransform(progress, [0.695, 0.755], [0, 1])
  const p1Y  = useTransform(progress, [0.695, 0.755], [28, 0])
  const p2Op = useTransform(progress, [0.71, 0.77], [0, 1])
  const p2Y  = useTransform(progress, [0.71, 0.77], [28, 0])
  const p3Op = useTransform(progress, [0.725, 0.785], [0, 1])
  const p3Y  = useTransform(progress, [0.725, 0.785], [28, 0])
  const p4Op = useTransform(progress, [0.74, 0.80], [0, 1])
  const p4Y  = useTransform(progress, [0.74, 0.80], [28, 0])
  const p5Op = useTransform(progress, [0.755, 0.815], [0, 1])
  const p5Y  = useTransform(progress, [0.755, 0.815], [28, 0])

  /* ── ACT 5: Logo pequeño, tagline y footer ─────────────────────────────── */
  const brandOp = useTransform(progress, [0.80, 0.87], [0, 1])
  const brandY  = useTransform(progress, [0.80, 0.87], [-22, 0])

  const ftOp = useTransform(progress, [0.83, 0.91], [0, 1])
  const ftY  = useTransform(progress, [0.83, 0.91], [38, 0])

  /* ── Arrays para iterar en JSX (sin llamar hooks en loops) ─────────────── */
  const bigLines = [
    { op: l0Op, y: l0Y, scale: l0Sc, text: 'Construimos',          strong: false },
    { op: l1Op, y: l1Y, scale: l1Sc, text: 'procesos sólidos',      strong: true  },
    { op: l2Op, y: l2Y, scale: l2Sc, text: 'para impulsar',         strong: false },
    { op: l3Op, y: l3Y, scale: l3Sc, text: 'organizaciones sólidas.',strong: true  },
  ]

  const pillarMotion = [
    { op: p0Op, y: p0Y },
    { op: p1Op, y: p1Y },
    { op: p2Op, y: p2Y },
    { op: p3Op, y: p3Y },
    { op: p4Op, y: p4Y },
    { op: p5Op, y: p5Y },
  ]

  /* Si el usuario prefiere menos movimiento, se sirve el contenido final    */
  /* directo, sin scroll-jacking, overlays ni animaciones infinitas.        */
  if (prefersReducedMotion) {
    return <StaticLanding />
  }

  /* ─────────────────────────────────────────────────────────────────────── */
  return (
    <>
      {/* Spacer: 700 vh dan espacio cómodo para los 5 actos + hold del logo */}
      <div aria-hidden="true" style={{ height: '700vh' }} />

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

            {/* Headline — SOLO en Act 5 (estado final ensamblado) */}
            {/*  En Act 3 los párrafos son protagonistas solos.         */}
            <motion.h1
              style={{ opacity: hOp, y: hY }}
              className="hero-headline max-w-5xl text-balance text-[clamp(1.45rem,7vw,3.25rem)] font-light leading-[1.08] tracking-normal text-[#050b24] sm:text-[clamp(1.85rem,3.6vw,3.25rem)]"
            >
              Construimos <strong>procesos sólidos</strong>
              <br />
              para impulsar <strong>organizaciones sólidas.</strong>
            </motion.h1>

            {/* Párrafos — Act 3 → final                                       */}
            {/*  Párrafo 1 emerge del blur al foco.                              */}
            {/*  Párrafo 2 hace lo mismo, un poco después.                       */}
            {/*  Nada de slides verticales — efecto editorial, cinematográfico.  */}
            <motion.div
              style={{ y: copyY, scale: copyScale }}
              className="hero-copy max-w-2xl space-y-5 text-balance text-[clamp(1rem,1.6vw,1.3rem)] leading-[1.6] text-[#151b35]"
            >
              <motion.p style={{ opacity: par1Op, filter: par1Blur }}>
                En ALUNZA integramos las capacidades corporativas que fortalecen la
                operación y el desarrollo de un grupo empresarial.
              </motion.p>
              <motion.p style={{ opacity: par2Op, filter: par2Blur }}>
                Bajo una visión compartida de colaboración, eficiencia y mejora
                continua, impulsamos el crecimiento mediante una gestión profesional,
                procesos confiables y una dirección estratégica orientada al futuro.
              </motion.p>
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
              <span>Más de 15 años</span>
               <span className="h-4 w-px bg-[#0052bc]" />
              <span>Sitio Oficial</span>
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
            {bigLines.map(({ op, y, scale, text, strong }) => (
              <motion.div
                key={text}
                style={{ opacity: op, y, scale }}
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

            {/* 1. Ícono azul — aparece con CSS al montar, luego flota */}
            <motion.img
              className="logo-icon"
              src="/ALUNZA LOGO FAVICON.png"
              alt=""
              aria-hidden="true"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 0.5,
                times: [0, 0.38, 1],
                ease: ['easeOut', 'easeIn'],
                repeat: Infinity,
                repeatDelay: 1.1,
                delay: 0.3,
              }}
            />

            {/* 2. ALUNZA.png — wrapper con overflow:hidden cuyo ancho va 0%→1000% */}
            {/*    La imagen dentro tiene ancho fijo; el padre la va descubriendo   */}
            {/*    de izquierda a derecha conforme el usuario scrollea.             */}
            <motion.div
              style={{ width: alunzaW, overflow: 'hidden' }}
              className="logo-alunza-wrapper"
            >
              <img
                className="logo-alunza-img"
                src="/ALUNZA.png"
                alt="ALUNZA"
                aria-hidden="true"
              />
            </motion.div>

            {/* 3. CORPORATIVO.png — sube con fade al scrollear */}
            <motion.img
              className="logo-corp-img"
              style={{ opacity: corpOp, y: corpYpx }}
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
