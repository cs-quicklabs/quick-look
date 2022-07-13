export async function getHostUrl(url: string) {
    return url.substring(0, url.lastIndexOf("/") + 1)
}