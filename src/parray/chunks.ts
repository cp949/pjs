/**
 * 주어진 배열을 chunk 단위로 쪼갠다
 *
 * @param arr 대상 배열
 * @param chunkSize chunk 크기
 * @returns chunk 배열(2차원)
 */
export function chunks<T>(arr: T[], chunkSize: number): T[][] {
    const chunked_arr: T[][] = []
    let index = 0
    while (index < arr.length) {
        chunked_arr.push(arr.slice(index, chunkSize + index))
        index += chunkSize
    }

    return chunked_arr
}
