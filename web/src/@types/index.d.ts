export interface MediaOptions {
  buffer?: boolean
  text?: boolean
}

export interface MediaOptionsWithUrl extends MediaOptions {
  url: string
}

export interface Output {
  found: true
  type: "video" | "image" | "gif"
  media: {
    url: string
    buffer?: Buffer
  }[]
  text?: string

}
export interface ErrorOutput {
  found: false
  error: string
}

export default function getTwitterMedia(url: string | MediaOptionsWithUrl, options?: MediaOptions): Promise<Output>