export function normalizeRgbColorString(str: string, prefix: string | null | undefined = '#'): string | null {
    let match: RegExpMatchArray | null = null

    match = str.match(/(#|0x)?([a-f0-9]{6})/i)
    if (match) {
        return prefix ? prefix + match[2] : match[2]
    }

    // not support rgba, just rgb
    match = str.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)
    if (match) {
        const result = parseInt(match[1]).toString(16).padStart(2, '0')
            + parseInt(match[2]).toString(16).padStart(2, '0')
            + parseInt(match[3]).toString(16).padStart(2, '0');
        return prefix ? prefix + result : result;
    }

    match = str.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)
    if (match) {
        const result = match[1] + match[1] + match[2] + match[2] + match[3] + match[3];
        return prefix ? prefix + result : result;
    }

    return null
}