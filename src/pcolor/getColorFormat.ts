import { normalizeRgbColorString } from './normalizeRgbColorString';
import { isRgbColorString } from './isRgbColorString';

type RGBObject = { r: number, g: number, b: number }
type RGBArray = [number, number, number]


export class StringRgb {
    static readonly isPrimitive = true
    static readonly formatName = 'string'
    static match = (v: any) => typeof v === 'string' && isRgbColorString(v)
    static fromHexString = (v: string): string | null => normalizeRgbColorString(v)
    static toHexString = (v: string): string | null => normalizeRgbColorString(v)
}

export class IntRgb {
    static readonly isPrimitive = true
    static readonly formatName = 'int'
    static match = (v: any) => typeof v === 'number'
    static fromHexString = (v: string, defaultValue = 0): number => {
        if (v.length === 6) {
            return parseInt(v, 16)
        }
        if (v.length === 7 && v.startsWith('#')) {
            v = v.substring(1)
        } else if (v.length === 8 && (v.startsWith('0x') || v.startsWith('0X'))) {
            v = v.substring(2)
        } else {
            v = normalizeRgbColorString(v, null)
            if (v === null) {
                return defaultValue;
            }
        }
        return parseInt(v, 16)
    }
    static toHexString = (v: number): string => '#' + v.toString(16).padStart(6, '0')
}

export class ArrayRgb {
    static readonly isPrimitive = false
    static readonly formatName = 'array'
    static match = (v: any) => {
        return Array.isArray(v) &&
            v.length >= 3 &&
            typeof v[0] === 'number' &&
            typeof v[1] === 'number' &&
            typeof v[2] === 'number'
    }

    static fromHexString = (str: string, outputScale = 255): RGBArray => {
        const v = IntRgb.fromHexString(str);
        if (outputScale === 255) {
            return [
                (v >> 16 & 255),
                (v >> 8 & 255),
                (v & 255)
            ]
        }

        const scale = 255 * outputScale
        return [
            (v >> 16 & 255) / scale,
            (v >> 8 & 255) / scale,
            (v & 255) / scale,
        ]
    }

    static toHexString = ([r, g, b]: RGBArray, inputScale = 255): string => {
        inputScale = 255 / inputScale;
        const v = (r * inputScale) << 16 ^
            (g * inputScale) << 8 ^
            (b * inputScale) << 0;
        return IntRgb.toHexString(v);
    }
}

export class ObjectRgb {
    static readonly isPrimitive = false
    static readonly formatName = 'object'
    static match = (v: any): boolean => {
        return Object(v) === v &&
            typeof v['r'] === 'number' &&
            typeof v['g'] === 'number' &&
            typeof v['b'] === 'number'
    }

    static fromHexString = (str: string, outputScale = 255): RGBObject => {
        const v = IntRgb.fromHexString(str);
        if (outputScale === 255) {
            return {
                r: (v >> 16 & 255),
                g: (v >> 8 & 255),
                b: (v & 255)
            }
        }
        const scale = 255 * outputScale
        return {
            r: (v >> 16 & 255) / scale,
            g: (v >> 8 & 255) / scale,
            b: (v & 255) / scale
        }
    }

    static toHexString = ({ r, g, b }: RGBObject, inputScale = 255): string => {
        inputScale = 255 / inputScale;
        const v = (r * inputScale) << 16 ^
            (g * inputScale) << 8 ^
            (b * inputScale) << 0;
        return IntRgb.toHexString(v);
    }
}



const FORMATS = [StringRgb, IntRgb, ArrayRgb, ObjectRgb];

export function getColorFormat(value: any): StringRgb | IntRgb | ArrayRgb | ObjectRgb | undefined {
    return FORMATS.find(format => format.match(value));
}
