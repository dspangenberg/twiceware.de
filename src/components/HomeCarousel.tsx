import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

interface Slide {
  src: string
  alt: string
  title: string
  url: string
}


export function HomeCarousel() {
  const slides: Slide[] = [
    { src: '/beleg-portal.png', alt: 'Belegportal', title: 'Belegportal für eine Anwaltskanzlei', url: '/projekte/belegportal' },
    { src: '/opsc2.png', alt: 'ELGA GmbH', title: 'OPSC, das interne CRM' , url: '/projekte/opsc' },
    { src: '/gnadtec.png', alt: 'gnadTec GmbH', title: 'Website der gnadtec GmbH' , url: 'https://www.gnadtec.de' },
    { src: '/mtg.png', alt: 'ELGA GmbH', title: 'Website von Matthias Gerschwitz' , url: 'https://matthias-gerschwitz.de/' },
    { src: '/elga-gmbh.png', alt: 'Website der ELGA GmbH', title: 'Website der ELGA GmbH' , url: 'https://www.elga-gmbh.de/' },
    { src: '/akr.png', alt: 'autokaufrecht.info', title: 'Der Autokaufrecht-Blog' , url: 'https://autokaufrecht.info/' }
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
      <div className="gap-1 mt-5">
        <a className="hover:underline flex flex-center justify-center gap-1" href={slides[current - 1]?.url}
           target={slides[current - 1]?.url?.includes('http') ? '_blank' : '_self'}
        >
          <h3 className="text-center text-xl font-semibold">{slides[current - 1]?.title}</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
               className="lucide lucide-external-link-icon lucide-external-link size-5 pt-1"
          >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        </a>
        <div className="mt-2.5 flex items-center justify-center gap-2 px-4">
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
    </div>
  )
}
