export function removeSuffix(str: string, suffix: string): string {
    if (str.length === 0 || suffix.length === 0) {
        return str
    }

    if (str.endsWith(suffix)) {
        return str.substring(0, str.length - suffix.length)
    }
    return str
}
