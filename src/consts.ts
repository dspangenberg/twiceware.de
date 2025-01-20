import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "twiceware.de",
  DESCRIPTION: "twiceware solutions e. K. in Bonn - Webentwicklung seit 2004",
  AUTHOR: "Danny Spangenberg",
}

// Work Page
export const WORK: Page = {
  TITLE: "Referenzen",
  DESCRIPTION: "Places I have worked.",
  BACKTEXT: 'Zurück zu den Referenzen'
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  BACKTEXT: 'Zurück zur Blogübersicht'
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projekte",
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
  /*
    {
      TEXT: "Referenzen",
      HREF: "/referenzen",
    },
*/
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  /*
  {
    TEXT: "Projekte",
    HREF: "/projekte",
  },

     */
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

