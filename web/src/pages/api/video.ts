import type { NextApiRequest, NextApiResponse } from "next";
const getTwitterMedia = require('get-twitter-media');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { videoLink } = req.body
  var data = await getTwitterMedia(videoLink, {
    buffer: true
  });

  res.status(200).json(data);
}
