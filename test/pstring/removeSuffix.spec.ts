import { expect } from 'chai'
import { removeSuffix } from '../../src/pstring/removeSuffix'

describe('테스트1 pstring.removeSuffix()', function () {
    it('removeSuffix Suffix가 존재하는 경우', function () {
        expect(removeSuffix('hello)', ')')).to.eql('hello')
        expect(removeSuffix('hello))', ')')).to.eql('hello)')
        expect(removeSuffix('hello))', '))')).to.eql('hello')
    })

    it('removeSuffix Suffix가 존재하지 않는 경우', function () {
        expect(removeSuffix('hello', ')')).to.eql('hello')
        expect(removeSuffix('hello', ')')).to.eql('hello')
        expect(removeSuffix('hello', '))')).to.eql('hello')
    })
})
