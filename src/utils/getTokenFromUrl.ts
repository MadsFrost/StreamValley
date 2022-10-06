type Initial = {
    [key: string]: any;
}
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial: Initial, item) => {;
        let parts: string[] = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial
    }, {})
}