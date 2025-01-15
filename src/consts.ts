import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Astro Sphere",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Mark Horn",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Startseite",
    HREF: "/", 
  },
  { 
    TEXT: "Arbeit",
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projekte",
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "E-Mail",
    ICON: "email", 
    TEXT: "danny@twiceware.de",
    HREF: "mailto:danny@twiceware.de",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "dspangenberg",
    HREF: "https://github.com/dspangenberg"
  },
  { 
    NAME: "Bluesky",
    ICON: "BlueSkyLogo",
    TEXT: "dasp.work",
    HREF: "https://bsky.app/dasp.work",
  },
]

