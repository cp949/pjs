import { expect, assert } from 'chai'
import { removeAt, cloneRemoveAt } from '../../src/parray/removeAt'

describe('테스트 parray.removeAt()', function () {
    it('0개 삭제하기', function () {
        const arr = [1, 2, 3]
        const removedElements = removeAt(arr, 0, 0)
        expect(0).to.equal(removedElements.length)
    })

    it('1개 삭제하기', function () {
        const arr = [1, 2, 3]
        const removedElements = removeAt(arr, 0, 1)
        expect([1]).to.eql(removedElements)
        expect([2, 3]).to.eql(arr)
    })

    it('2개 삭제하기', function () {
        const arr = [1, 2, 3]
        const removedElements = removeAt(arr, 0, 2)
        expect([1, 2]).to.eql(removedElements)
        expect([3]).to.eql(arr)
    })

    it('음수로 1개 삭제하기', function () {
        const arr = [1, 2, 3]
        const removedElements = removeAt(arr, -1, 1)
        expect([3]).to.eql(removedElements)
        expect([1, 2]).to.eql(arr)
    })

    it('음수로 2개 삭제하기', function () {
        const arr = [1, 2, 3]
        const removedElements = removeAt(arr, -1, 2)
        expect([3]).to.eql(removedElements)
        expect([1, 2]).to.eql(arr)
    })
})

describe('테스트 parray.cloneRemoveAt()', function () {
    it('0개 삭제하기', function () {
        const arr = [1, 2, 3]
        const result = cloneRemoveAt(arr, 0, 0)
        expect([1, 2, 3]).to.eql(arr)
        expect([1, 2, 3]).to.eql(result)
        assert.notStrictEqual(arr, result)
    })

    it('1개 삭제하기', function () {
        const arr = [1, 2, 3]
        const result = cloneRemoveAt(arr, 0, 1)
        expect([1, 2, 3]).to.eql(arr)
        expect([2, 3]).to.eql(result)
        assert.notStrictEqual(arr, result)
    })

    it('2개 삭제하기', function () {
        const arr = [1, 2, 3]
        const result = cloneRemoveAt(arr, 0, 2)
        expect([1, 2, 3]).to.eql(arr)
        expect([3]).to.eql(result)
        assert.notStrictEqual(arr, result)
    })

    it('음수로 1개 삭제하기', function () {
        const arr = [1, 2, 3]
        const result = cloneRemoveAt(arr, -1, 1)
        expect([1, 2]).to.eql(result)
        expect([1, 2, 3]).to.eql(arr)
        assert.notStrictEqual(arr, result)
    })

    it('음수로 2개 삭제하기', function () {
        const arr = [1, 2, 3]
        const result = cloneRemoveAt(arr, -1, 2)
        expect([1, 2]).to.eql(result)
        expect([1, 2, 3]).to.eql(arr)
        assert.notStrictEqual(arr, result)
    })
})
