import Axios from 'axios'
import { MediaOptions, MediaOptionsWithUrl, Output, ErrorOutput } from 'get-twitter-media'

/**
 * 
 * @param {string | MediaOptionsWithUrl} url A URL or an object with a URL property, and optionally a buffer and/or text property
 * @param {MediaOptions} [options] An object with a buffer and/or text property
 * @returns {Promise<Output | ErrorOutput>} 
 */

export default async function getTwitterMedia(url: string | MediaOptionsWithUrl, options?: MediaOptions): Promise<Output | ErrorOutput> {

    let input: MediaOptionsWithUrl = {} as any

    if (typeof url === 'object') if (url.url) input = url
    else return { found: false, error: 'No URL provided' }
    else if (typeof url === 'string') input.url = url
    else return { found: false, error: 'Invalid first argument' }

    if (options) Object.keys(options).forEach((key: string) => input[key as keyof typeof options] = options[key as keyof typeof options])

    if (/\/\/twitter.com/.test(input.url)) {
        let apiURL = input.url.replace('//twitter.com', '//api.vxtwitter.com')

        let result = await Axios.get(apiURL).then((res: any) => res.data).catch((err: any) => {
            return { found: false, error: 'An issue occured. Make sure the twitter link is valid.' }
        })
        if (!result.media_extended) return { found: false, error: 'No media found' }
        let media: { url: string, buffer?: Buffer, text?: string }[] = []
        result.media_extended.forEach(async (mediaItem: any, i: number) => {
            media[i] = {
                url: mediaItem.url
            }
            if (input.buffer) media[i].buffer = await Axios.get(mediaItem.url, { responseType: 'arraybuffer' }).then((res: any) => {
                return Buffer.from(res.data, 'binary') as Buffer
            }).catch((err: any) => {
                console.warn('Error getting buffer: ', err)
                return undefined
            })
        })

        let output: Output = {
            found: true,
            type: result.media_extended[0].type,
            media: media
        }
        if (input.text) output.text = result.text

        return output
    } else return { found: false, error: `Invalid URL: ${input.url}` }

}