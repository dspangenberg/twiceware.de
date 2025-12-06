import { getCollection } from 'astro:content'
import { sort } from 'moderndash';

export const getCategoriesForProjects = async() => {
  const projects = await getProjects()
  const categories = [...new Set(projects.flatMap(project => project.data.category))]
  return sort(categories, { order: 'asc' })
}

export const getTagsForProjects = async () => {
  const projects = await getProjects()
  const tags = [...new Set(projects.flatMap(project => project.data.tags || []))]
  return sort(tags, { order: 'asc' })
}

export const getProjects = async () => {
  const projects = await getCollection('projekte')
  return sort(projects.filter(project => !project.data.draft), { order: 'desc', by: item => item.data.featured ? 1 : 0}, { order: 'desc', by: item => item.data.date})
}

export const getProjectsByCategory = async (category: string) => {
  const projects = await getProjects()
  return projects.filter(project => project.data.category === category)
}

export const getProjectsByTag = async (tag: string) => {
  const projects = await getProjects()
  return projects.filter(project => project.data.tags?.includes(tag))
}

export const getProjectsForHomepage = async () => {
  const projects = await getCollection('projekte')
  return sort(projects, {order: 'desc', by: item => item.data.date}).filter(project => project.data.homeFeatured)
}



