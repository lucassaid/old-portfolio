import fs from 'fs'
import path from 'path'

export function getData(folder) {
  const devToolsDirectory = path.join(process.cwd(), `data/${folder}`)
  const fileNames = fs.readdirSync(devToolsDirectory)
  let devTools = {}
  for(const fileName of fileNames) {
    const id = fileName.replace(/\.json$/, '')
    const fullPath = path.join(devToolsDirectory, fileName)
    const rawData = fs.readFileSync(fullPath)
    devTools[id] = JSON.parse(rawData)
  }
  return devTools
}