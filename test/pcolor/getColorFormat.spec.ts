import { expect, assert } from 'chai'
import { getColorFormat, StringRgb, IntRgb, ArrayRgb, ObjectRgb } from '../../src/pcolor/getColorFormat'

describe('테스트 pcolor.getColorFormat()', function () {
    it('Color value TEST', function () {
        expect(StringRgb.toHexString('rgb(1,2,3)')).to.eql('#010203')

        // not support rgba
        expect(StringRgb.toHexString('rgba(1,2,3)')).to.null
        expect(StringRgb.toHexString('#112233')).to.eql('#112233')
        expect(StringRgb.toHexString('#123')).to.eql('#112233')
        expect(StringRgb.fromHexString('#123')).to.eql('#112233')
        expect(StringRgb.fromHexString('#112233')).to.eql('#112233')

        expect(IntRgb.toHexString(0x112233)).to.eql('#112233')
        expect(IntRgb.toHexString(0x123)).to.eql('#000123')
        expect(IntRgb.fromHexString('#112233')).to.eql(0x112233)
        expect(IntRgb.fromHexString('#123')).to.eql(0x112233)

        expect(ObjectRgb.toHexString({ r: 0x11, g: 0x22, b: 0x33 })).to.eql('#112233')
        expect(ObjectRgb.toHexString({ r: 1, g: 1, b: 1 })).to.eql('#010101')
        expect(ObjectRgb.toHexString({ r: 1, g: 1, b: 1 }, 255)).to.eql('#010101')
        expect(ObjectRgb.toHexString({ r: 1, g: 1, b: 1 }, 1)).to.eql('#ffffff')
        expect(ObjectRgb.fromHexString('#112233')).to.deep.eq({ r: 0x11, g: 0x22, b: 0x33 })

        expect(ArrayRgb.toHexString([0x11, 0x22, 0x33])).to.eql('#112233')
        expect(ArrayRgb.toHexString([1, 1, 1])).to.eql('#010101')
        expect(ArrayRgb.toHexString([1, 1, 1], 255)).to.eql('#010101')
        expect(ArrayRgb.toHexString([1, 1, 1], 1)).to.eql('#ffffff')
        expect(ArrayRgb.fromHexString('#112233')).to.deep.eq([0x11, 0x22, 0x33])
    })

    it('get Array Color format', function () {
        expect(getColorFormat([255, 255, 255])).to.eql(ArrayRgb)
        expect(getColorFormat([255, 255])).to.undefined
        expect(getColorFormat([255])).to.undefined
        expect(getColorFormat([])).to.undefined
    })

    it('get Object Color format', function () {
        expect(getColorFormat({ r: 255, g: 255, b: 255 })).to.eql(ObjectRgb)
        expect(getColorFormat({ r: 255, g: 255, b: 255, other: 123 })).to.eql(ObjectRgb)
        expect(getColorFormat({ R: 255, G: 255, B: 255 })).to.undefined
        expect(getColorFormat({ r: 255, g: 255 })).to.undefined
        expect(getColorFormat({ r: 255 })).to.undefined
        expect(getColorFormat({})).to.undefined
    })

    it('get String Color format', function () {
        expect(getColorFormat('#aabbcc')).to.eql(StringRgb)
        expect(getColorFormat('#aaa')).to.eql(StringRgb)
        expect(getColorFormat('#AABBCC')).to.eql(StringRgb)
        expect(getColorFormat('#AAA')).to.eql(StringRgb)
        expect(getColorFormat('0xaabbcc')).to.eql(StringRgb)
        expect(getColorFormat('0xabc')).to.undefined
        expect(getColorFormat('aabbcc')).to.eql(StringRgb)
        expect(getColorFormat('abc')).to.eql(StringRgb)
        expect(getColorFormat('#aa')).to.undefined
        expect(getColorFormat('#a')).to.undefined
        expect(getColorFormat('#')).to.undefined
    })

    it('get Int Color format', function () {
        expect(getColorFormat(0x112233)).to.eql(IntRgb)
        expect(getColorFormat(0x11223)).to.eql(IntRgb)
        expect(getColorFormat(0x1122)).to.eql(IntRgb)
        expect(getColorFormat(0x112)).to.eql(IntRgb)
        expect(getColorFormat(0x11)).to.eql(IntRgb)
        expect(getColorFormat(0x1)).to.eql(IntRgb)
        expect(getColorFormat(0x0)).to.eql(IntRgb)
    })
})
