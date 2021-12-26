import { expect, assert } from 'chai'
import { rangeInt } from '../../src/parray/rangeInt'

describe('테스트 parray.rangeInt()', function () {
    it('양수 테스트1', function () {
        const arr = rangeInt(0)
        expect(0).to.eql(arr.length)
    })

    it('양수 테스트2', function () {
        const arr = rangeInt(1)
        expect([0]).to.eql(arr)
    })

    it('양수 테스트3', function () {
        const arr = rangeInt(2)
        expect([0, 1]).to.eql(arr)
    })

    it('양수 테스트4', function () {
        const arr = rangeInt(3)
        expect([0, 1, 2]).to.eql(arr)
    })
})
