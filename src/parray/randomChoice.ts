function randomIntExclusiveEnd(min: number, max: number): number {
    const range = max - min // 5 - 2 = 3
    return Math.floor(Math.random() * range) + min // [0,1,2] + 2 => [2,3,4]
}

/**
 * 주어진 배열에서 랜덤하게 하나를 선택한다
 *
 * @param array 대상 배열
 * @returns 랜덤한 배열의 항목
 */
export function randomChoice<T>(array: T[]): T {
    if (array.length <= 0) {
        throw new Error('invalid array')
    }
    if (array.length === 1) return array[0]

    const idx = randomIntExclusiveEnd(0, array.length)
    return array[idx]
}
