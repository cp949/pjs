import { trim } from './trim'

export function firstNotBlank(...strArr: (string | undefined | null)[]): string | undefined {
    if (typeof strArr === 'undefined') return undefined
    if (strArr === null || strArr.length === 0) return undefined
    return strArr.find((it) => trim(it).length > 0) ?? undefined
}
