export function removePrefix(str: string, prefix: string): string {
    if (str.length === 0 || prefix.length === 0) {
        return str
    }

    if (str.startsWith(prefix)) {
        return str.substring(prefix.length)
    }
    return str
}
