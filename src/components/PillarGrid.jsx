import { motion } from 'framer-motion'
import { pillars } from '../data/pillars'
import { PillarContent } from './PillarContent'

export function PillarGrid({ motionValues }) {
  return (
    <div className="pillar-grid grid w-full max-w-5xl grid-cols-2 gap-y-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
      {pillars.map(({ label, description, icon: Icon }, index) => {
        const itemMotion = motionValues?.[index]

        if (!itemMotion) {
          return (
            <div key={label} className="pillar">
              <PillarContent label={label} description={description} Icon={Icon} />
            </div>
          )
        }

        return (
          <motion.div
            key={label}
            className="pillar"
            style={{ opacity: itemMotion.opacity, y: itemMotion.y }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                delay: index * 0.1,
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex flex-col items-center gap-1.5"
            >
              <PillarContent label={label} description={description} Icon={Icon} />
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}
