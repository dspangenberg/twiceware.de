import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

export function HomeCarousel() {
  const slides = [
    { src: '/beleg-portal.png', alt: 'Belegportal' },
    { src: '/opsc2.png', alt: 'ELGA GmbH' },
    { src: '/gnadtec.png', alt: 'gnadTec GmbH' },
    { src: '/mtg.png', alt: 'ELGA GmbH' },
    { src: '/elga-gmbh.png', alt: 'ELGA GmbH' },
    { src: '/akr.png', alt: 'autokaufrecht.info' }
  ]

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="relative">

      <Carousel
        className="w-full max-w-sm rounded-xl shadow-xl mx-auto border xl:max-w-4xl 2xl:max-w-7xl"
        plugins={[
          Autoplay({
            delay: 5000
          })
        ]}
        setApi={setApi}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <img
                src={slide.src}
                alt={slide.alt}
                className="aspect-[16/9] w-full rounded-xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-6 flex items-center justify-center gap-2 px-4">
        {Array.from({ length: slides.length }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={cn('h-3.5 w-3.5 rounded-full border-2 cursor-pointer border-black/20', {
              '!border-blue-600': current === index + 1
            })}
          />
        ))}
      </div>
    </div>
  )
}
