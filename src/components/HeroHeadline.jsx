import { motion } from 'framer-motion'

export function HeroHeadline({ motionStyle, className = '' }) {
  const Tag = motionStyle ? motion.h1 : 'h1'

  return (
    <Tag
      style={motionStyle}
      className={[
        'hero-headline max-w-5xl text-balance font-light tracking-normal text-[#050b24]',
        className,
      ].join(' ')}
    >
      Construimos <strong>procesos sólidos</strong>
      <br />
      para impulsar <strong>organizaciones sólidas.</strong>
    </Tag>
  )
}
