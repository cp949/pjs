import { expect, assert } from 'chai'
import { replaceAt, cloneReplaceAt } from '../../src/parray/replaceAt'

describe('테스트 parray.replaceAt()', function () {
    it('0개 Replace', function () {
        const arr = [1, 2, 3]
        replaceAt(arr, 0)
        expect([1, 2, 3]).to.eql(arr)
    })

    it('1개 Replace', function () {
        const arr = [1, 2, 3]
        replaceAt(arr, 0, 4)
        expect([4, 2, 3]).to.eql(arr)
    })

    it('2개 Replace', function () {
        const arr = [1, 2, 3]
        replaceAt(arr, 0, 4, 5)
        expect([4, 5, 3]).to.eql(arr)
    })

    it('매우 큰 인덱스로 Replace - append와 동일', function () {
        const arr = [1, 2, 3]
        replaceAt(arr, 9999, 4)
        expect([1, 2, 3, 4]).to.eql(arr)
    })

    it('음수 인덱스로 1개 Replace - 마지막항목 교체', function () {
        const arr = [1, 2, 3]
        replaceAt(arr, -1, 2.5)
        expect([1, 2, 2.5]).to.eql(arr)
    })
})

describe('테스트 parray.cloneReplaceAt()', function () {
    it('0개 cloneReplace', function () {
        const arr = [1, 2, 3]
        const result = cloneReplaceAt(arr, 0)
        expect([1, 2, 3]).to.eql(result)
        assert.notStrictEqual(arr, result)
    })

    it('1개 cloneReplace', function () {
        const arr = [1, 2, 3]
        const result = cloneReplaceAt(arr, 0, 4)
        expect([4, 2, 3]).to.eql(result)
        assert.notStrictEqual(arr, result)
    })

    it('음수 인덱스로 1개 cloneReplace', function () {
        const arr = [1, 2, 3]
        const result = cloneReplaceAt(arr, -1, 2.5)
        expect([1, 2, 2.5]).to.eql(result)
        assert.notStrictEqual(arr, result)
    })

    it('음수 인덱스로 2개 cloneReplace', function () {
        const arr = [1, 2, 3]
        const result = cloneReplaceAt(arr, -1, 2.5, 3.5)
        expect([1, 2, 2.5, 3.5]).to.eql(result)
        assert.notStrictEqual(arr, result)
    })
})
