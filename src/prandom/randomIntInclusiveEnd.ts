export function randomIntInclusiveEnd(min: number, max: number): number {
    const range = max - min + 1 // 5 - 2 + 1 = 4
    return Math.floor(Math.random() * range) + min // [0,1,2,3] + 2 = [2,3,4,5]
}
