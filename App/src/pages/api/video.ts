import type { NextApiRequest, NextApiResponse } from "next";
import twitterGetUrl from "twitter-url-direct";

async function getVideoDownload(url: any) {
  let response = await twitterGetUrl(url);
  return response
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { videoUrl } = req.query;
  var data = await getVideoDownload(videoUrl)
  res.status(200).json(data);
}
