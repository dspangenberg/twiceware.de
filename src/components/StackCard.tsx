type StackCardProps = {
  text: string
  icon: string
  href: string
}

export default function StackCard({ text, icon, href }: StackCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="px-3 py-2 group rounded !no-underline flex gap-2 items-center border-neutral-200 hover:bg-neutral-100 blend"
    >
      <div className="block">
        <svg height={30} width={30} stroke="#000" strokeWidth={2}>
          <use href={`/tabler-sprite.svg#${icon}`}></use>
        </svg>
      </div>
      <div className="block text-xl lg:text-2xl  text-neutral-500 group-hover:text-black blend">
        {text}
      </div>
    </a>
  )
}
