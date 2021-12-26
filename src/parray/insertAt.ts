/**
 * 배열에 요소를 삽입한다.
 * 원본 배열이 변경된다.
 *
 * 인덱스 규칙은 splice()와 동일하다.
 * 음수는 마지막 요소의 인덱스를 의미하고
 * 범위를 벗어나게 큰 인덱스는 배열의 끝과 동일하다
 *
 * @param arr 대상 배열
 * @param index 삽입할 인덱스
 * @param items 삽입할 요소들(가변인자)
 */
export function insertAt<T>(arr: T[], index: number, ...items: T[]) {
    arr.splice(index, 0, ...items)
}

/**
 * 주어진 배열을 복제한 후에 요소를 삽입한다.
 * 원본 배열은 변경하지 않는다.
 *
 * @param arr 대상 배열
 * @param index 삽입할 위치 인덱스
 * @param items 삽입할 요소들(가변인자)
 * @returns 복제한 배열
 */
export function cloneInsertAt<T>(arr: T[], index: number, ...items: T[]): T[] {
    const newArr = [...arr]
    newArr.splice(index, 0, ...items)
    return newArr
}
