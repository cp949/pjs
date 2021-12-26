import { trim } from './trim'

export function trimToUndefined(str: string | undefined | null): string | undefined {
    const text = trim(str)
    return text.length == 0 ? undefined : text
}
