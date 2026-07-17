import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function IntroLogoScene({ introMotion, isBreathing }) {
  return (
    <motion.div
      style={{ opacity: introMotion.opacity }}
      className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-white"
    >
      <motion.div
        style={{ scale: introMotion.scale, y: introMotion.y }}
        className="logo-intro"
      >
        <motion.div
          aria-hidden="true"
          animate={isBreathing ? { y: [0, -5, 0], scale: [1, 1.08, 1] } : { y: 0, scale: 1 }}
          transition={
            isBreathing
              ? {
                  duration: 2.4,
                  times: [0, 0.5, 1],
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatDelay: 0.15,
                  delay: 0.85,
                }
              : { duration: 0.28, ease: 'easeOut' }
          }
        >
          <img className="logo-icon" src="/ALUNZA LOGO FAVICON.png" alt="" />
        </motion.div>

        <motion.div
          style={{ width: introMotion.alunzaWidth, overflow: 'hidden' }}
          className="logo-alunza-wrapper"
        >
          <img className="logo-alunza-img" src="/ALUNZA.png" alt="ALUNZA" aria-hidden="true" />
        </motion.div>

        <motion.img
          className="logo-corp-img"
          style={{ opacity: introMotion.corpOpacity, y: introMotion.corpY }}
          src="/CORPORATIVO.png"
          alt="Corporativo"
          aria-hidden="true"
        />
      </motion.div>

      <motion.div
        className="scroll-cue"
        aria-hidden="true"
        initial={{ opacity: 0, y: 6 }}
        animate={
          isBreathing
            ? { opacity: [0.48, 0.92, 0.48], y: [0, 9, 0] }
            : { opacity: 0, y: 12 }
        }
        transition={
          isBreathing
            ? {
                duration: 1.7,
                times: [0, 0.5, 1],
                ease: 'easeInOut',
                repeat: Infinity,
                delay: 1.25,
              }
            : { duration: 0.2, ease: 'easeOut' }
        }
      >
        <span>Desliza</span>
        <ChevronDown size={22} strokeWidth={1.8} />
      </motion.div>
    </motion.div>
  )
}
