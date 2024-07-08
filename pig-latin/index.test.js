const translate = require("./index");

describe('translate()', () => {

    it("properly changes a string starting with a 'vowel' to pig latin", () => {
        expect(translate('apple')).toBe('appleway');
        expect(translate('else')).toBe('elseway');
        expect(translate('in')).toBe('inway');
        expect(translate('opposite')).toBe('oppositeway');
        expect(translate('unknown')).toBe('unknownway');
    })

    it("properly changes a string starting with a 'consonant' to pig latin", () => {
        expect(translate('giraffe')).toBe('iraffegay');
        expect(translate('candy')).toBe('andycay');
    })

    it("properly changes a string starting with two 'consonants' to pig latin", () => {
        expect(translate('swat')).toBe('atsway');
    });

    it("properly changes a string starting with three 'consonants' to pig latin", () => {
        expect(translate('script')).toBe('iptscray');
    });

    it("changes all words to lower case", () => {
        expect(translate('Ugly')).toBe('uglyway');
    });
})