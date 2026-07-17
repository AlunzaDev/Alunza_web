import { motion } from 'framer-motion'

export function HeroCopy({ motionValues }) {
  if (!motionValues) {
    return (
      <div className="hero-copy max-w-3xl text-balance text-[#151b35]">
        <p>
          En ALUNZA integramos las capacidades corporativas que fortalecen la operación y el
          desarrollo de un grupo empresarial.
        </p>
        <p>
          Bajo una visión compartida de colaboración, eficiencia y mejora continua, impulsamos el
          crecimiento mediante una gestión profesional, procesos confiables y una dirección
          estratégica orientada al futuro.
        </p>
      </div>
    )
  }

  return (
    <motion.div
      style={{ y: motionValues.y, scale: motionValues.scale }}
      className="hero-copy max-w-2xl text-balance text-[#151b35]"
    >
      <motion.p style={{ opacity: motionValues.firstOpacity, filter: motionValues.firstBlur }}>
        En ALUNZA integramos las capacidades corporativas que fortalecen la operación y el
        desarrollo de un grupo empresarial.
      </motion.p>
      <motion.p style={{ opacity: motionValues.secondOpacity, filter: motionValues.secondBlur }}>
        Bajo una visión compartida de colaboración, eficiencia y mejora continua, impulsamos el
        crecimiento mediante una gestión profesional, procesos confiables y una dirección
        estratégica orientada al futuro.
      </motion.p>
    </motion.div>
  )
}
