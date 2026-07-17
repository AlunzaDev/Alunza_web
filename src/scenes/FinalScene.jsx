import { BrandLockup } from '../components/BrandLockup'
import { HeroCopy } from '../components/HeroCopy'
import { HeroHeadline } from '../components/HeroHeadline'
import { LandingFooter } from '../components/LandingFooter'
import { PillarGrid } from '../components/PillarGrid'

export function FinalScene({ motion }) {
  return (
    <div className="scene-layout h-full px-4 text-center sm:px-8 lg:px-12">
      <BrandLockup motionStyle={{ opacity: motion.brand.opacity, y: motion.brand.y }} />

      <div className="scene-main mx-auto flex w-full max-w-5xl flex-col items-center justify-center">
        <HeroHeadline
          motionStyle={{
            opacity: motion.finalHeadline.opacity,
            y: motion.finalHeadline.y,
          }}
        />
        <HeroCopy motionValues={motion.copy} />
        <PillarGrid motionValues={motion.pillars} />
      </div>

      <LandingFooter motionStyle={{ opacity: motion.footer.opacity, y: motion.footer.y }} />
    </div>
  )
}
