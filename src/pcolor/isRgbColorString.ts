const REG_HEX6 = /(#|0x)?([a-f0-9]{6})/i
const REG_RGB = /rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/
const REG_HEX3 = /^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i

/**
 * RGB 컬러 문자열 체크
 * @param v 
 * @returns 
 * @example
 * isRgbColorString('#112233') => true
 * isRgbColorString('0x112233') => true 
 * isRgbColorString('#123') => true 
 * isRgbColorString('0x123') => false
 * isRgbColorString('123') => true 
 * isRgbColorString('112233') => true 
 */
export function isRgbColorString(v: string): boolean {
    return REG_HEX6.test(v) ||
        REG_RGB.test(v) ||
        REG_HEX3.test(v)
}
