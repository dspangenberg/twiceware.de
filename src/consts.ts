import type { Links, Page, Site, Socials } from '@/types'

// Global
export const SITE: Site = {
  TITLE: 'twiceware.de',
  DESCRIPTION: 'twiceware solutions e. K. in Bonn - Webentwicklung seit 2004',
  AUTHOR: 'Danny Spangenberg'
}

// Work Page
export const WORK: Page = {
  TITLE: 'Referenzen',
  DESCRIPTION: 'Places I have worked.'
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.'
}

// About Page
export const ABOUT: Page = {
  TITLE: 'Über mich',
  DESCRIPTION: 'Softwareentwickler und Webentwickler seit über 20 Jahren.'
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projekte',
  DESCRIPTION: 'Recent projects I have worked on.'
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.'
}

// Links
export const LINKS: Links = [
  {
    TEXT: 'Startseite',
    HREF: '/'
  },
  {
    TEXT: 'Über mich',
    HREF: '/ueber-mich'
  },
  {
    TEXT: 'Blog',
    HREF: '/blog'
  }
  /*
  {
    TEXT: "Referenzen",
    HREF: "/referebzen",
  },
  {
    TEXT: "Projekte",
    HREF: "/projekte",
  },

     */
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: 'E-Mail',
    ICON: 'email',
    TEXT: 'danny@twiceware.de',
    HREF: 'mailto:danny@twiceware.de'
  },
  {
    NAME: 'Github',
    ICON: 'github',
    TEXT: 'dspangenberg',
    HREF: 'https://github.com/dspangenberg'
  },
  {
    NAME: 'Bluesky',
    ICON: 'BlueSkyLogo',
    TEXT: 'dasp.work',
    HREF: 'https://bsky.app/dasp.work'
  }
]
