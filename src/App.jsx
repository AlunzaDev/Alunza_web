import { useLandingMotion } from './hooks/useLandingMotion'
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion'
import { useScrollProgress } from './hooks/useScrollProgress'
import { FinalScene } from './scenes/FinalScene'
import { HeadlineScene } from './scenes/HeadlineScene'
import { IntroLogoScene } from './scenes/IntroLogoScene'
import { StaticLanding } from './scenes/StaticLanding'
import { SceneBackground } from './components/SceneBackground'

export default function App() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const { progress, isAtIntro } = useScrollProgress({ disabled: prefersReducedMotion })
  const motion = useLandingMotion(progress)

  if (prefersReducedMotion) {
    return <StaticLanding />
  }

  return (
    <>
      <div aria-hidden="true" style={{ height: '950vh' }} />

      <div className="fixed inset-0 isolate overflow-hidden bg-white">
        <SceneBackground />
        <FinalScene motion={motion} />
        <HeadlineScene lines={motion.headline} />
        <IntroLogoScene introMotion={motion.intro} isBreathing={isAtIntro} />
      </div>
    </>
  )
}
