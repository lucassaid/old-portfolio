import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const worksDirectory = path.join(process.cwd(), 'data/works')

export function getAllWorksIds() {
  const fileNames = fs.readdirSync(worksDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        lang: fileName.split('.')[1],
        id: fileName.split('.')[0]
      }
    }
  })
}

export async function getWorkData(id, lang) {
  const fullPath = path.join(worksDirectory, `${id}.${lang}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  const previewData = getPreviewData(id)

  // Combine the data with the id and contentHtml and previewData
  return {
    id,
    contentHtml,
    ...previewData,
    ...matterResult.data
  }
}

function getPreviewData(slug) {
  const workingOnDirectory = path.join(process.cwd(), `data/portfolio/workingOn.json`)
  const rawData = fs.readFileSync(workingOnDirectory)
  const workingProjects = JSON.parse(rawData)
  for(const project of workingProjects) {
    if(project.slug === slug) {
      return project
    }
  }
  return {}
}