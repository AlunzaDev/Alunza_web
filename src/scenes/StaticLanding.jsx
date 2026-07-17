import { BrandLockup } from '../components/BrandLockup'
import { HeroCopy } from '../components/HeroCopy'
import { HeroHeadline } from '../components/HeroHeadline'
import { LandingFooter } from '../components/LandingFooter'
import { PillarGrid } from '../components/PillarGrid'
import { SceneBackground } from '../components/SceneBackground'

export function StaticLanding() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <SceneBackground />

      <div className="scene-layout px-4 text-center sm:px-8 lg:px-12">
        <BrandLockup />

        <div className="scene-main mx-auto flex w-full max-w-5xl flex-col items-center justify-center">
          <HeroHeadline />
          <HeroCopy />
          <PillarGrid />
        </div>

        <LandingFooter />
      </div>
    </div>
  )
}
