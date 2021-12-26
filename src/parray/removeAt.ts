/**
 * 배열에서 특정 인덱스의 요소를 삭제하는 함수
 *
 * @param arr 대상 배열
 * @param index 삭제할 인덱스
 * @param howMany 삭제할 항목의 수
 * @returns 삭제된 항목을 배열로 리턴(splice() 함수의 동작과 동일함)
 */
export function removeAt<T>(arr: T[], index: number, howMany = 1): T[] {
    return arr.splice(index, howMany)
}

/**
 * 배열에서 특정 인덱스의 요소를 삭제하는 함수,
 * 배열을 복제한 후에 삭제한다.
 * 주의할 점은 리턴 값이다.
 * removeAt()은 splice()와 동일하게 제거된 요소의 배열을 리턴하지만
 * cloneRemoveAt()은 복제한 배열을 리턴한다
 *
 * @param arr 대상 배열
 * @param index 삭제할 인덱스
 * @param howMany 삭제할 항목의 수
 * @returns 복제한 배열
 */
//  export function cloneRemoveAt<T>(arr: T[], index: number, howMany = 1): T[] {
//     const newArr = [...arr]
//     newArr.splice(index, howMany)
//     return newArr
// }

export function cloneRemoveAt<T>(arr: T[], index: number, howMany = 1): T[] {
    if (howMany <= 0) {
        return [...arr]
    }

    if (index < 0) {
        index = arr.length + index
    }
    return [...arr.slice(0, index), ...arr.slice(index + howMany)]
}
