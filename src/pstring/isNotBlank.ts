import { isBlank } from './isBlank'

export function isNotBlank(str: string | undefined | null): str is string {
  return !isBlank(str)
}
