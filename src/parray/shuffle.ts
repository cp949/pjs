function getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
}

/**
 * 주어진 배열의 항목을 셔플링한다
 *
 * @param array 대상 배열
 * @returns void
 */
export function shuffle<T>(array: T[]): void {
    // if it's 1 or 0 items, just return
    if (array.length <= 1) return

    // For each index in array
    for (let i = 0; i < array.length; i++) {
        const randomIdx = getRandom(i, array.length - 1)

        // place our random choice in the spot by swapping
        ;[array[i], array[randomIdx]] = [array[randomIdx], array[i]]
    }
}

/**
 * 주어진 배열의 항목을 셔플링한다
 * 원본 배열은 변경하지 않는다.
 * @param array 대상 배열
 * @returns 복제한 배열
 */
export function cloneShuffle<T>(array: T[]): T[] {
    const newArr = [...array]
    shuffle(newArr)
    return newArr
}
