export function replaceAt<T>(arr: T[], index: number, ...items: T[]) {
    arr.splice(index, items.length, ...items)
}

export function cloneReplaceAt<T>(arr: T[], index: number, ...items: T[]): T[] {
    if (items.length === 0) {
        return [...arr]
    }
    if (index < 0) {
        index = arr.length - 1
    }
    return [...arr.slice(0, index), ...items, ...arr.slice(index + items.length)]
}
