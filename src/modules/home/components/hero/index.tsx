import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { CursorArrowRays } from "@medusajs/icons"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            ProFinder Fishing
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Cutting Edge GPS Waypoint Data Chips
          </Heading>
        </span>
        <a
          href="http://localhost:8000/store"
          target="_parent"
        >
          <Button variant="secondary">
            Browse Our Store
            <CursorArrowRays />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
