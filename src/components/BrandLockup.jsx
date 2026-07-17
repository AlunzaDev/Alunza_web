import { motion } from 'framer-motion'

export function BrandLockup({ motionStyle, staticClassName = '' }) {
  const className = [
    'brand-lockup',
    staticClassName,
  ]
    .filter(Boolean)
    .join(' ')

  const image = (
    <img
      src="/ALUNZA-LOCKUP-CLEAN.png"
      alt="Alunza Corporativo"
      className="brand-lockup-art"
    />
  )

  if (!motionStyle) {
    return <div className={className}>{image}</div>
  }

  return (
    <motion.div style={motionStyle} className={className}>
      {image}
    </motion.div>
  )
}
