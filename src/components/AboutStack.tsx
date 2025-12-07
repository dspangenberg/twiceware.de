import StackCard from "@/components/StackCard"

const stack = [
  {
    text: "adonis",
    icon: "tabler-brand-adonis-js",
    href: "https://adonisjs.com"
  },
  {
    text: "Astro",
    icon: "tabler-brand-astro",
    href: "https://astro.build"
  },
  {
    text: "Laravel",
    icon: "tabler-brand-laravel",
    href: "https://laravel.com"
  },
  {
    text: "Node.js",
    icon: "tabler-brand-nodejs",
    href: "https://nodejs.org"
  },
  {
    text: "PHP",
    icon: "tabler-brand-php",
    href: "https://php.net"
  },
  {
    text: "ReactJS",
    icon: "tabler-brand-react",
    href: "https://react.dev"
  },
  {
    text: "tailwindcss",
    icon: "tabler-brand-tailwind",
    href: "https://tailwindcss.com"
  },
  {
    text: "TypeScript",
    icon: "tabler-brand-typescript",
    href: "https://www.typescriptlang.org"
  },
  {
    text: "Vue.js",
    icon: "tabler-brand-vue",
    href: "https://vuejs.org"
  },
  {
    text: "WordPress",
    icon: "tabler-brand-wordpress",
    href: "https://wordpress.org"
  }
]

export default function AboutStack() {
  return (
    <div className="gap-2 mt-5 grid grid-cols-2 lg:grid-cols-5">
      {stack.map((item) => (
        <StackCard
          key={item.text}
          text={item.text}
          icon={item.icon}
          href={item.href}
        />
      ))}
    </div>
  )
}
