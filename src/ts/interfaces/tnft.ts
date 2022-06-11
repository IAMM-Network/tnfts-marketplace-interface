import StringKeyPair from '../types/stringKeyPair'
import FileType from '../types/fileType'

interface TNFT {
  name: string
  fileType: FileType
  file: string
  externalLink: string
  description: string
  howSmart: Smart
  impact: Impact
  supply: number
}

export default TNFT

interface Smart {
  ownership: boolean
  timelock: boolean
  generative: boolean
}

interface Impact {
  properties: StringKeyPair[]
  levels: StringKeyPair[]
  stats: StringKeyPair[]
  nsfw: boolean
}
