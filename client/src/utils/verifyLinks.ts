export function verifySpotify(link: string) {
    const regex = /spotify:artist:6HQYnRM4OzToCYPpVBInuU/i
    return regex.test(link);
}

export function verifySoundCloud(link: string) {
    const regex = /^(?:(https?):\/\/)?(?:(?:www|m)\.)?(soundcloud\.com|snd\.sc)\/(.*)$/
    return regex.test(link);
}

export function verifyYouTube(link: string) {
    const longURI = /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/
    const shortURI = /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/
    return longURI.test(link) || shortURI.test(link)
}