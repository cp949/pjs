// /^\s*-?\d+(\.\d+)?\s*$/.test(str);

export function isNumeric(str: string | undefined | null): boolean {
    if (str === null || typeof str === 'undefined') return false

    return !isNaN(Number(str))
}
