import * as React from 'react'
import { Marquee } from '@/components/ui/marquee'

export function StackMarquee () {

  const stack = [
    {
      text: 'adonis',
      icon: 'tabler-brand-adonis-js',
      href: 'https://adonisjs.com'
    },
    {
      text: 'Astro',
      icon: 'tabler-brand-astro',
      href: 'https://astro.build'
    },
    {
      text: 'Laravel',
      icon: 'tabler-brand-laravel',
      href: 'https://laravel.com'
    },
    {
      text: 'Node.js',
      icon: 'tabler-brand-nodejs',
      href: 'https://nodejs.org'
    },
    {
      text: 'PHP',
      icon: 'tabler-brand-php',
      href: 'https://php.net'
    },
    {
      text: 'ReactJS',
      icon: 'tabler-brand-react',
      href: 'https://react.dev'
    },
    {
      text: 'tailwindcss',
      icon: 'tabler-brand-tailwind',
      href: 'https://tailwindcss.com'
    },
    {
      text: 'TypeScript',
      icon: 'tabler-brand-typescript',
      href: 'https://www.typescriptlang.org'
    }
    ,
    {
      text: 'Vue.js',
      icon: 'tabler-brand-vue',
      href: 'https://vuejs.org'
    },
    {
      text: 'WordPress',
      icon: 'tabler-brand-wordpress',
      href: 'https://wordpress.org'
    }
  ]

  return (<Marquee>
      {stack.map((s, index) => (
        <div
          key={index}
          className="relative  w-fit mx-[4rem] flex items-center justify-start gap-2"
        >
          <div className="text-stone-400">
            <svg height={36} width={36} stroke="currentColor" strokeWidth={1}>
              <use href={`/tabler-sprite.svg#${s.icon}`}></use>
            </svg>
          </div>
          {s.text}
        </div>
      ))}
    </Marquee>
  )
}
