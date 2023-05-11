export function isArrayEqual(arr1: any, arr2: any): boolean {
  if (arr1 === arr2) return true
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false
  if (arr1.length !== arr2.length) return false
  return arr1.every((it, idx) => it === arr2[idx])
}
