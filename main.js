const languages = require('./get-aloha.js')
// const languages = require('./db.js');

// const lang = process.argv[2];
const userLanguage = process.argv[2].toLowerCase();
const lang = userLanguage;
const result = languages(lang)
console.log(result.greeting);
console.log(result.farewell);

// if(process.argv[2] === undefined){
//     return lang = languages['english'];
// } else {
//     return lang = process.argv[2]
// }

// const result = languages(lang);

// console.log(lang);
// console.log(languages[lang]['greeting']);

// const lang = 'french';
const sample = Object.filter = function(dataBase, idiom){
    let result = {}, key;
    for(key in dataBase){
        if(dataBase.hasOwnProperty(key) && idiom === lang){
            result[key] = dataBase[key];
        }
    }
    return result;
}
const filtered = sample(languages[lang], lang)
// console.log(languages[lang]);