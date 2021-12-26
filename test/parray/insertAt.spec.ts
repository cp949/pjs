import { expect, assert } from 'chai'
import { insertAt, cloneInsertAt } from '../../src/parray/insertAt'

describe('테스트 parray.insertAt()', function () {
    it('0개 등록하기', function () {
        const arr = [1, 2, 3]
        insertAt(arr, 0)
        expect([1, 2, 3]).to.eql(arr)
    })

    it('1개 등록하기', function () {
        const arr = [1, 2, 3]
        insertAt(arr, 0, 4)
        expect([4, 1, 2, 3]).to.eql(arr)
    })
    it('2개 등록하기', function () {
        const arr = [1, 2, 3]
        insertAt(arr, 0, 4, 5)
        expect([4, 5, 1, 2, 3]).to.eql(arr)
    })

    it('끝에 덧붙이기', function () {
        const arr = [1, 2, 3]
        insertAt(arr, arr.length, 4)
        expect([1, 2, 3, 4]).to.eql(arr)
    })

    it('매우 큰 인덱스로 끝에 덧붙이기', function () {
        const arr = [1, 2, 3]
        insertAt(arr, 9999, 4)
        expect([1, 2, 3, 4]).to.eql(arr)
    })

    it('음수 인덱스로 1개 등록하기', function () {
        const arr = [1, 2, 3]
        insertAt(arr, -1, 2.5)
        expect([1, 2, 2.5, 3]).to.eql(arr)
    })
})

/**
 * 위에서 insertAt()을 테스트했으므로,
 * 여기서는 assert.notStrictEqual()인지만 체크한다.
 */
describe('테스트 parray.cloneInsertAt()', function () {
    it('1개 등록하기', function () {
        const arr = [1, 2, 3]
        const result = cloneInsertAt(arr, 0, 4)
        expect([4, 1, 2, 3]).to.eql(result)
        assert.notStrictEqual(arr, result)
    })

    it('음수 인덱스로 1개 등록하기', function () {
        const arr = [1, 2, 3]
        const result = cloneInsertAt(arr, -1, 2.5)
        expect([1, 2, 2.5, 3]).to.eql(result)
        assert.notStrictEqual(arr, result)
    })
})
