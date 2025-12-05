import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import type { CollectionEntry } from 'astro:content'

interface Props {
  projects: CollectionEntry<'projekte'>[]
}

export function HomeCarousel ({ projects }: Props) {

  const getProject = (index: number) => projects[index]
  const getUrl = (index: number): string => {
    const project = getProject(index)
    return project.data.extUrl || `/projekte/${project.slug}`
  }
  const getTarget = (index: number): string => {
    return getUrl(index)?.startsWith('http') ? '_blank' : '_self'
  }

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
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
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <img
                src={project.data.image}
                alt={project.data.title}
                className="aspect-[16/9] w-full rounded-xl"
              />
            </CarouselItem>

          ))}
        </CarouselContent>
      </Carousel>
      <div className="gap-1 mt-5 ">
        <div className="hidden">
          <a className="hover:underline flex flex-center justify-center gap-1" href={getUrl(current)}
             target={getTarget(current)}
          >
            <h3 className="text-center text-xl font-semibold">{projects[current]?.data.title}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-external-link-icon lucide-external-link size-5 pt-1"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </a>
        </div>
        <div className="mt-2.5 flex items-center justify-center gap-2 px-4">
          {Array.from({ length: projects.length }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => api?.scrollTo(index)}
              className={cn('h-3.5 w-3.5 rounded-full border-2 cursor-pointer border-black/20', {
                '!border-blue-600': current === index
              })}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
