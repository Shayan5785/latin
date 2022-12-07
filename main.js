function translate(word) {
    let regEx = /a|e|i|o|u/i
    let string = word.toLowerCase()
    let firstkVowel = string.match(regEx).index
    let latinString;

    if (firstkVowel == 0) {
        latinString = `${string}way`
    }  else {
        let flipinString = string.slice(0, firstkVowel)
        let remainString = string.substring(firstkVowel)
        latinString = `${remainString}${flipinString}ay`
    }
    
    return latinString;
}

let res = translate("World");
console.log(res);

module.exports = { translate }