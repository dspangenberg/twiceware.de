export type Page = {
  TITLE: string
  DESCRIPTION: string
  BACKTEXT?: string
}

export interface Site extends Page {
  AUTHOR: string
}

export type Links = {
  TEXT: string
  HREF: string
}[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]

export type BreadcrumbProp = {
  title: string
  href: string
}
