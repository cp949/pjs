import { isNotEmpty } from './isNotEmpty'

export function firstNotEmpty(...strArr: (string | undefined | null)[]): string | undefined {
    if (typeof strArr === 'undefined') return undefined
    if (strArr === null || strArr.length === 0) return undefined
    return strArr.find((it) => isNotEmpty(it)) ?? undefined
}
