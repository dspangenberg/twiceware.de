import type { CollectionEntry } from 'astro:content'
import { useEffect, useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import type { Page } from 'astro'

type Props = {
  tags: string[]
  categories: string[]
  data: CollectionEntry<'projekte'>[]
  title?: string
  page: Page
}

export default function Projects ({
  categories,
  data,
  title,
  page,
  tags
}: Props) {
  const [filter, setFilter] = useState(new Set<string>())
  const [projects, setProjects] = useState<CollectionEntry<'projekte'>[]>([])

  useEffect(() => {
    setProjects(data.filter((entry) =>
      !entry.data.draft &&
      Array.from(filter).every((value) =>
        entry.data.tags.some((tag: string) =>
          tag.toLowerCase() === String(value).toLowerCase()
        )
      )
    ))
  }, [filter])



  return (

    <div className="flex gap-6 flex-wrap">
      <div className="flex-none w-64">
        <div className="sticky top-56 pt-20 space-y-6">
          <ul>
            <li>
              <a href="/projekte/1">Alle Referenzen</a>
            </li>
          </ul>

          <div className="text-sm font-semibold uppercase mb-2 text-black">Kategorien</div>
          <ul className="flex flex-wrap sm:flex-col">
            {categories.map((category) => (
              <li key={category}>
                <a href={`/projekte/kategorie/${category}/1`}>
                  {category}
                </a>
              </li>
            ))}
          </ul>
          <div className="text-sm font-semibold uppercase mb-2 text-black">Tags</div>
          <ul className="flex flex-wrap sm:flex-col">
            {tags.map((tag) => (
              <li key={tag}>
                <a href={`/projekte/tag/${tag}/1`}>
                  {tag}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 animate">
        <div className="flex flex-col">
          <div className="text-sm uppercase mb-2">
            {page.total} von {data.length} Projekte
          </div>
          <ul className="flex flex-col gap-y-6">
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectCard entry={project} key={project.slug} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
