import { expect } from 'chai'
import { removePrefix } from '../../src/pstring/removePrefix'

describe('테스트1 pstring.removePrefix()', function () {
    it('removePrefix Prefix가 존재하는 경우', function () {
        expect(removePrefix('(hello', '(')).to.eql('hello')
        expect(removePrefix('((hello', '(')).to.eql('(hello')
        expect(removePrefix('((hello', '((')).to.eql('hello')
    })

    it('removePrefix Prefix가 존재하지 않는 경우', function () {
        expect(removePrefix('hello', '(')).to.eql('hello')
        expect(removePrefix('hello', '(')).to.eql('hello')
        expect(removePrefix('hello', '((')).to.eql('hello')
    })
})
