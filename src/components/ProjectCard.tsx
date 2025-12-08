import type { CollectionEntry } from 'astro:content'
import { sort  } from 'moderndash'
type Props = {
  entry: CollectionEntry<'projekte'>
}

export default function ProjectCard ({
  entry
}: Props) {
  const url = entry.data.extUrl ? entry.data.extUrl : `/projekte/${entry.slug}`
  const target = url.startsWith('http') ? '_blank' : '_self'
  const tags = sort(entry.data.tags, { order: 'asc'})
  return (
    <a href={url} target={target}
       className="group  gap-3 flex items-center border border-stone-200 hover:bg-stone-50 hover:border-stone-300 rounded-lg transition-colors duration-300 ease-in-out"
    >
      <div className="w-full group-hover:text-black blend p-1">
        {entry.data.image && <img src={entry.data.image} className="w-full rounded-lg border aspect-[16/9] object-cover"  alt={entry.data.title} />}
        <div className="p-4 space-y-4">

          <h2 className="font-semibold !text-2xl mt-3 text-black">
            {entry.data.title}
            {entry.data.extUrl && <span className=""> (externer Link)</span>}
          </h2>

          <ul className="flex flex-wrap mt-2 gap-1">
            {tags.map((tag: string) => (
              <li key={tag} className="text-sm uppercase border border-stone-200 py-0.5 px-1.5 rounded-md bg-blue-50 text-black/75">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

    </a>
  )
}
