const translate = (string) => {

    string = string.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];


    if(vowels.includes(string[0])) {
        return string + 'way';
    } else {
        let vowelIndex = 0;
        for (let i = 1; i < string.length; i++) {
            if (vowels.includes(string[i])) {
                vowelIndex = i;
                break;
            }
        }
    return string.slice(vowelIndex) + string.slice(0, vowelIndex) + 'ay';
    }
};

translate('apple');

module.exports = translate;