import { expect } from 'chai'
import { size } from '../../src/parray/size'

describe('테스트 parray.size()', function () {
    it('0개의 길이', function () {
        const arr: any[] = []
        expect(0).to.equal(size(arr))
    })

    it('1개의 길이', function () {
        const arr = [1]
        expect(1).to.equal(size(arr))
    })

    it('2개의 길이', function () {
        const arr = [1, 2]
        expect(2).to.equal(size(arr))
    })

    it('null의 길이', function () {
        const arr = null
        expect(0).to.equal(size(arr))
    })

    it('undefined의 길이', function () {
        const arr = null
        expect(0).to.equal(size(arr))
    })
})
