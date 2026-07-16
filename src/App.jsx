import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  ChartPie,
  Landmark,
  Monitor,
  UsersRound,
} from 'lucide-react'

const pillars = [
  { label: 'Estrategia', icon: Landmark },
  { label: 'Administración', icon: BriefcaseBusiness },
  { label: 'Capital humano', icon: UsersRound },
  { label: 'Finanzas', icon: ChartPie },
  { label: 'Tecnología', icon: Monitor },
  { label: 'Gestión', icon: ChartNoAxesColumnIncreasing },
]

function PillarGrid({ style }) {
  return (
    <motion.div
      style={style}
      className="pillar-grid mt-4 grid w-full max-w-5xl grid-cols-2 gap-y-3 sm:grid-cols-3 lg:mt-5 lg:grid-cols-6 lg:gap-y-0"
    >
      {pillars.map(({ label, icon: Icon }, index) => (
        <div className="pillar" key={label}>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              delay: index * 0.08,
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex flex-col items-center gap-1.5"
          >
            <Icon aria-hidden="true" size={32} strokeWidth={1.8} />
            <span>{label}</span>
          </motion.div>
        </div>
      ))}
    </motion.div>
  )
}

function FinalFrame({
  animated = false,
  brandStyle,
  headlineStyle,
  dividerStyle,
  paragraphStyle,
  pillarsStyle,
  footerStyle,
}) {
  const Image = animated ? motion.img : 'img'
  const Headline = animated ? motion.div : 'div'
  const Divider = animated ? motion.span : 'span'
  const Paragraphs = animated ? motion.div : 'div'
  const Footer = animated ? motion.footer : 'footer'

  return (
    <div className="alunza-hero relative isolate flex h-[100svh] min-h-[620px] flex-col items-center justify-between overflow-hidden px-4 pb-3 pt-4 text-center sm:px-8 sm:pb-4 sm:pt-5 lg:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_47%,rgba(0,83,181,0.11),transparent_18%),linear-gradient(180deg,#ffffff_0%,#ffffff_66%,#eef6ff_100%)]" />
      <div className="alunza-horizon pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[24vh] min-h-32 overflow-hidden" />

      <Image
        style={brandStyle}
        src="/ALUNZA-LOGO-BLACK_TXT.png"
        alt="Alunza Corporativo"
        className="brand-lockup w-full max-w-[132px] object-contain sm:max-w-[205px] lg:max-w-[245px]"
      />

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center">
        <Headline
          style={headlineStyle}
          className="flex w-full flex-col items-center"
        >
          <h1 className="hero-headline max-w-5xl text-balance text-[clamp(1.45rem,7vw,3.25rem)] font-light leading-[1.08] tracking-normal text-[#050b24] sm:text-[clamp(1.85rem,3.6vw,3.25rem)]">
            Construimos <strong>procesos sólidos</strong>
            <br />
            para impulsar <strong>organizaciones sólidas.</strong>
          </h1>
          <Divider
            style={dividerStyle}
            className="mt-2 h-px w-16 origin-center bg-[#0052bc] sm:mt-3 sm:w-20"
          />
        </Headline>

        <Paragraphs
          style={paragraphStyle}
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
        </Paragraphs>

        <PillarGrid style={pillarsStyle} />
      </div>

      <Footer style={footerStyle} className="relative z-10 w-full">
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
      </Footer>
    </div>
  )
}

function App() {
  const storyRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ['start start', 'end end'],
  })

  const introLogoScale = useTransform(scrollYProgress, [0, 0.12, 0.24], [1, 1.08, 0.5])
  const introLogoY = useTransform(scrollYProgress, [0, 0.12, 0.24], [0, -18, -190])
  const introLogoOpacity = useTransform(scrollYProgress, [0, 0.16, 0.26], [1, 1, 0])

  const brandOpacity = useTransform(scrollYProgress, [0.18, 0.28], [0, 1])
  const brandY = useTransform(scrollYProgress, [0.18, 0.28], [-24, 0])

  const headlineOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1])
  const headlineScale = useTransform(scrollYProgress, [0.2, 0.34], [1.18, 1])
  const headlineY = useTransform(scrollYProgress, [0.2, 0.34], [42, 0])

  const dividerOpacity = useTransform(scrollYProgress, [0.38, 0.46], [0, 1])
  const dividerScaleX = useTransform(scrollYProgress, [0.38, 0.46], [0, 1])

  const paragraphOpacity = useTransform(scrollYProgress, [0.46, 0.56], [0, 1])
  const paragraphY = useTransform(scrollYProgress, [0.46, 0.56], [28, 0])

  const pillarsOpacity = useTransform(scrollYProgress, [0.58, 0.68], [0, 1])
  const pillarsY = useTransform(scrollYProgress, [0.58, 0.68], [30, 0])

  const footerOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1])
  const footerY = useTransform(scrollYProgress, [0.7, 0.8], [26, 0])

  return (
    <main className="bg-white text-slate-950">
      <section ref={storyRef} className="relative h-[420vh] bg-white">
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          <FinalFrame
            animated
            brandStyle={{ opacity: brandOpacity, y: brandY }}
            headlineStyle={{
              opacity: headlineOpacity,
              scale: headlineScale,
              y: headlineY,
            }}
            dividerStyle={{ opacity: dividerOpacity, scaleX: dividerScaleX }}
            paragraphStyle={{ opacity: paragraphOpacity, y: paragraphY }}
            pillarsStyle={{ opacity: pillarsOpacity, y: pillarsY }}
            footerStyle={{ opacity: footerOpacity, y: footerY }}
          />

          <motion.div
            style={{
              opacity: introLogoOpacity,
              scale: introLogoScale,
              y: introLogoY,
            }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-white px-6"
          >
            <motion.img
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              src="/ALUNZA-LOGO-BLACK_TXT.png"
              alt="Alunza Corporativo"
              className="w-[min(82vw,760px)] object-contain sm:w-[min(72vw,760px)]"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white">
        <FinalFrame />
      </section>
    </main>
  )
}

export default App
