import { expect } from 'chai'
import { removeSurrounding } from '../../src/pstring/removeSurrounding'

describe('테스트 pstring.removeSurrounding()', function () {
    it('removeSurrounding 구분자가 존재하는 경우', function () {
        const str = '(helloworld)'

        expect(removeSurrounding(str, '(', ')')).to.eql('helloworld')
    })

    it('removeSurrounding 구분자가 존재하는 경우', function () {
        const str = '()'
        expect(removeSurrounding(str, '(', ')')).to.eql('')
    })

    it('removeSurrounding 구분자가 존재하는 경우, prefix/suffix 테스트', function () {
        const str = 'XXhelloworldYYYY'
        expect(removeSurrounding(str, 'XX', 'YYYY')).to.eql('helloworld')
    })

    it('removeSurrounding 구분자가 존재하지 않는 경우', function () {
        const str = '(helloworld'

        expect(removeSurrounding(str, '(', ')')).to.eql('(helloworld')
    })

    it('removeSurrounding 구분자가 존재하지 않는 경우', function () {
        const str = '()'
        expect(removeSurrounding(str, '(', ']')).to.eql('()')
    })

    it('removeSurrounding 구분자가 존재하지 않는 경우, prefix/suffix 테스트', function () {
        const str = 'XXhelloworld'
        expect(removeSurrounding(str, 'XX', 'YYYY')).to.eql('XXhelloworld')
    })

    it('removeSurrounding 문자열이 구분자 보다 짧은 경우', function () {
        const str = 'hello'
        expect(removeSurrounding(str, '****', '####')).to.eql('hello')
    })

    it('removeSurrounding 빈 문자열인 경우', function () {
        const str = ''
        expect(removeSurrounding(str, '****', '####')).to.eql('')
    })

    it('removeSurrounding 구분자가 빈 문자열인 경우', function () {
        const str = 'hello'
        expect(removeSurrounding(str, '')).to.eql('hello')
        expect(removeSurrounding(str, '', '')).to.eql('hello')
        expect(removeSurrounding(str, '****', '')).to.eql('hello')
        expect(removeSurrounding(str, '', '****')).to.eql('hello')
    })
})
