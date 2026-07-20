import { motion } from 'framer-motion'

export function LandingFooter({ motionStyle }) {
  const Tag = motionStyle ? motion.footer : 'footer'

  return (
    <Tag style={motionStyle} className="relative z-10 w-full">
      <p className="tagline mx-auto max-w-4xl text-center text-balance font-light text-[#12162d]">
        ALUNZA no es una marca.{' '}
        Es un movimiento <span className="tagline-blue">hacia arriba.</span>
      </p>
      <div className="footer-meta flex items-center justify-center text-[#1b223d]">
        <span>© 2009 Alunza Corporativo</span>
        <span className="h-4 w-px bg-[#0052bc]" />
        <span>Más de 15 años</span>
        {motionStyle && (
          <>
            <span className="h-4 w-px bg-[#0052bc]" />
            <span>Sitio oficial</span>
          </>
        )}
      </div>
    </Tag>
  )
}
