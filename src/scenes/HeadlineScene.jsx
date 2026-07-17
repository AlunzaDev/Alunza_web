import { motion } from 'framer-motion'

export function HeadlineScene({ lines }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 sm:px-16 lg:px-24"
    >
      <div className="w-full max-w-5xl">
        {lines.map(({ opacity, y, scale, text, strong }) => (
          <motion.div
            key={text}
            style={{ opacity, y, scale }}
            className={[
              'big-line block tracking-normal',
              strong ? 'font-semibold text-[#004db3]' : 'font-light text-[#050b24]',
            ].join(' ')}
          >
            {text}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
