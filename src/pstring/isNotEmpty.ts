export function isNotEmpty(str: string | undefined | null): boolean {
    return (str?.length ?? 0) > 0
}
