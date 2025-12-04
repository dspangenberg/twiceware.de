import { formatDate } from '@/lib/utils'
import type { CollectionEntry } from 'astro:content'

type Props = {
  entry: CollectionEntry<'projekte'>
  pill?: boolean
}

export default function ArrowCard ({
  entry,
  pill
}: Props) {
  const url = entry.data.extUrl ? entry.data.extUrl : `/projekte/${entry.slug}`
  const target = url.startsWith('http') ? '_blank' : '_self'

  return (
    <a href={url} target={target}
       className="group  gap-3 flex items-center border border-stone-200 hover:bg-stone-50 rounded-lg transition-colors duration-300 ease-in-out"
    >
      <div className="w-full group-hover:text-black blend p-2">
        {entry.data.image && <img src={entry.data.image} className="w-full rounded-lg border"  alt={entry.data.title} />}
        <div className="p-4">

          <div className="font-semibold text-xl mt-3 text-black">
            {entry.data.title}
          </div>

          <ul className="flex flex-wrap mt-2 gap-1">
            {entry.data.tags.map((tag: string) => ( // this line has an error; Parameter 'tag' implicitly has an 'any' type.ts(7006)
              <li className="text-xs uppercase py-0.5 px-1.5 rounded-md bg-stone-200 text-black/75">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

    </a>
  )
}
