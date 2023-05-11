export function isNotEmpty(str: string | undefined | null): str is string {
  return (str?.length ?? 0) > 0
}
