import { isBlank } from './isBlank'

export function isNotBlank(str: string | undefined | null): boolean {
    return !isBlank(str)
}
