import { useMotionTemplate, useTransform } from 'framer-motion'

export function useLandingMotion(progress) {
  const intro = {
    alunzaWidth: useTransform(progress, [0.04, 0.12], ['0%', '100%']),
    corpOpacity: useTransform(progress, [0.09, 0.17], [0, 1]),
    corpY: useTransform(progress, [0.09, 0.17], [16, 0]),
    opacity: useTransform(progress, [0.22, 0.30], [1, 0]),
    scale: useTransform(progress, [0.22, 0.30], [1, 0.5]),
    y: useTransform(progress, [0.22, 0.30], [0, -180]),
  }

  const headline = [
    {
      text: 'Construimos',
      strong: false,
      opacity: useTransform(progress, [0.30, 0.37, 0.45, 0.52], [0, 1, 1, 0]),
      y: useTransform(progress, [0.30, 0.37, 0.45, 0.52], [90, 0, 0, -70]),
      scale: useTransform(progress, [0.45, 0.52], [1, 0.9]),
    },
    {
      text: 'procesos sólidos',
      strong: true,
      opacity: useTransform(progress, [0.32, 0.39, 0.45, 0.52], [0, 1, 1, 0]),
      y: useTransform(progress, [0.32, 0.39, 0.45, 0.52], [90, 0, 0, -70]),
      scale: useTransform(progress, [0.45, 0.52], [1, 0.9]),
    },
    {
      text: 'para impulsar',
      strong: false,
      opacity: useTransform(progress, [0.34, 0.41, 0.45, 0.52], [0, 1, 1, 0]),
      y: useTransform(progress, [0.34, 0.41, 0.45, 0.52], [90, 0, 0, -70]),
      scale: useTransform(progress, [0.45, 0.52], [1, 0.9]),
    },
    {
      text: 'organizaciones sólidas.',
      strong: true,
      opacity: useTransform(progress, [0.36, 0.43, 0.45, 0.52], [0, 1, 1, 0]),
      y: useTransform(progress, [0.36, 0.43, 0.45, 0.52], [90, 0, 0, -70]),
      scale: useTransform(progress, [0.45, 0.52], [1, 0.9]),
    },
  ]

  const copy = {
    firstOpacity: useTransform(progress, [0.50, 0.58], [0, 1]),
    firstBlur: useMotionTemplate`blur(${useTransform(progress, [0.50, 0.58], [10, 0])}px)`,
    secondOpacity: useTransform(progress, [0.56, 0.64], [0, 1]),
    secondBlur: useMotionTemplate`blur(${useTransform(progress, [0.56, 0.64], [10, 0])}px)`,
    y: useTransform(progress, [0.50, 0.68, 0.78, 0.88], [-82, -82, -16, 0]),
    scale: useTransform(progress, [0.50, 0.68, 0.78, 0.88], [1.18, 1.18, 1.04, 1]),
  }

  const finalHeadline = {
    opacity: useTransform(progress, [0.82, 0.88], [0, 1]),
    y: useTransform(progress, [0.82, 0.88], [-36, -16]),
  }

  const pillars = [
    {
      opacity: useTransform(progress, [0.68, 0.74], [0, 1]),
      y: useTransform(progress, [0.68, 0.74], [28, 0]),
    },
    {
      opacity: useTransform(progress, [0.695, 0.755], [0, 1]),
      y: useTransform(progress, [0.695, 0.755], [28, 0]),
    },
    {
      opacity: useTransform(progress, [0.71, 0.77], [0, 1]),
      y: useTransform(progress, [0.71, 0.77], [28, 0]),
    },
    {
      opacity: useTransform(progress, [0.725, 0.785], [0, 1]),
      y: useTransform(progress, [0.725, 0.785], [28, 0]),
    },
    {
      opacity: useTransform(progress, [0.74, 0.80], [0, 1]),
      y: useTransform(progress, [0.74, 0.80], [28, 0]),
    },
    {
      opacity: useTransform(progress, [0.755, 0.815], [0, 1]),
      y: useTransform(progress, [0.755, 0.815], [28, 0]),
    },
  ]

  const brand = {
    opacity: useTransform(progress, [0.80, 0.87], [0, 1]),
    y: useTransform(progress, [0.80, 0.87], [-22, 0]),
  }

  const footer = {
    opacity: useTransform(progress, [0.83, 0.91], [0, 1]),
    y: useTransform(progress, [0.83, 0.91], [38, 0]),
  }

  return { brand, copy, finalHeadline, footer, headline, intro, pillars }
}
