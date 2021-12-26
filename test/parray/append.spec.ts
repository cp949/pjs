import { expect, assert } from 'chai'
import { append, cloneAppend } from '../../src/parray/append'

describe('테스트 parray.append()', function () {
    it('0개 Append', function () {
        const arr = [1, 2, 3]
        append(arr)
        expect([1, 2, 3]).to.eql(arr)
    })

    it('1개 Append', function () {
        const arr = [1, 2, 3]
        append(arr, 4)
        expect([1, 2, 3, 4]).to.eql(arr)
    })
    it('2개 Append', function () {
        const arr = [1, 2, 3]
        append(arr, 4, 5)
        expect([1, 2, 3, 4, 5]).to.eql(arr)
    })
})

/**
 * 위에서 append()을 테스트했으므로,
 * 여기서는 assert.notStrictEqual()인지만 체크한다.
 */
describe('테스트 parray.cloneAppend()', function () {
    it('1개 Append', function () {
        const arr = [1, 2, 3]
        const result = cloneAppend(arr, 4)
        expect([1, 2, 3, 4]).to.eql(result)
        assert.notStrictEqual(arr, result)
    })

    it('2개 Append', function () {
        const arr = [1, 2, 3]
        const result = cloneAppend(arr, 3.5, 4.5)
        expect([1, 2, 3, 3.5, 4.5]).to.eql(result)
        assert.notStrictEqual(arr, result)
    })
})
