import { expect } from 'chai'
import { trim, trimLeft, trimRight } from '../../src/pstring'

describe('테스트 pstring.trim()', function () {
    it('문자열 trim', function () {
        const str = '\n\t foo bar \t\n'

        expect(trim(str)).to.eql('foo bar')
    })
})

describe('테스트 pstring.trimRight()', function () {
    it('문자열 trimRight', function () {
        const str = '\n\t foo bar \t\n'

        expect(trimRight(str)).to.eql('\n\t foo bar')
    })
})

describe('테스트 pstring.trimLeft()', function () {
    it('문자열 trimLeft', function () {
        const str = '\n\t foo bar \t\n'

        expect(trimLeft(str)).to.eql('foo bar \t\n')
    })
})
