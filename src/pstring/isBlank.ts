import { trim } from './trim'

export function isBlank(str: string | undefined | null): boolean {
    return trim(str).length === 0
}
