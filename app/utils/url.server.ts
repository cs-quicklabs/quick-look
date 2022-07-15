export async function getHostUrl(url: string) {
    url =  url.replace('auth/', '')
    return url.substring(0, url.lastIndexOf("/") + 1)
}