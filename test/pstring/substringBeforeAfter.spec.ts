import { expect } from 'chai'
import { substringAfter, substringAfterLast } from '../../src/pstring/substringAfter'
import { substringBefore, substringBeforeLast } from '../../src/pstring/substringBefore'

describe('테스트 pstring.substringAfter()', function () {
    it('substringAfter 구분자가 발견되는 경우', function () {
        const str = 'hello(world)(best)'
        expect(substringAfter(str, '(')).to.eql('world)(best)')
        expect(substringAfterLast(str, '(')).to.eql('best)')
    })

    it('substringAfter 구분자가 발견 안되는 경우', function () {
        const str = 'hello'
        expect(substringAfter(str, '(')).to.eql(str)
        expect(substringAfter(str, '(', 'xxx')).to.eql('xxx')
        expect(substringAfterLast(str, '(')).to.eql(str)
        expect(substringAfterLast(str, '(', 'xxx')).to.eql('xxx')
    })

    it('substringBefore 구분자가 발견되는 경우', function () {
        const str = 'hello(world)(best)'
        expect(substringBefore(str, '(')).to.eql('hello')
        expect(substringBeforeLast(str, '(')).to.eql('hello(world)')
    })

    it('substringBefore 구분자가 발견 안되는 경우', function () {
        const str = 'hello'
        expect(substringBefore(str, '(')).to.eql(str)
        expect(substringBefore(str, '(', 'xxx')).to.eql('xxx')
        expect(substringBeforeLast(str, '(')).to.eql(str)
        expect(substringBeforeLast(str, '(', 'xxx')).to.eql('xxx')
    })
})
