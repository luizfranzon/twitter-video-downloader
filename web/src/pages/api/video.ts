import type { NextApiRequest, NextApiResponse } from "next";
import getTwitterMedia from "get-twitter-media";

async function getVideoDownload(url: any) {
  let response = await getTwitterMedia(url, {
    buffer: true
  });
  return response;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { videoLink } = req.body
  var data = await getVideoDownload(videoLink);

  res.status(200).json(data);
}
