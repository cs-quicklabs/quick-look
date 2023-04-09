export async function getHostUrl(url: string) {
  url = url.replace('auth/', '')
  return url.substring(0, url.lastIndexOf('/') + 1)
}

export async function getImageKeyFromUrl(url: string) {
  return url?.slice(url.lastIndexOf('/') + 1)
}

export async function getVideoSource(sourceUrl: string) {
  sourceUrl.toLowerCase()
  return sourceUrl.includes('youtube.com')
}
