export function urlVideoDimensionFormater(url: string) {
  let videoLinkSplitted = url.split("/")

  let dimension;

  if (videoLinkSplitted.length == 9) {
    dimension = videoLinkSplitted[7]
  } else if (videoLinkSplitted.length == 8) {
    dimension = videoLinkSplitted[6]
  }

  return dimension
  
}