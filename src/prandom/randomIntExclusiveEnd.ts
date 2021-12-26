export function randomIntExclusiveEnd(min: number, max: number): number {
    const range = max - min // 5 - 2 = 3
    return Math.floor(Math.random() * range) + min // [0,1,2] + 2 => [2,3,4]
}
