const languages = require('./get-aloha.js')

const userLanguage = process.argv[2];
const lang = userLanguage;
const result = languages(lang)
console.log(result.greeting);
console.log(result.farewell);

const sample = Object.filter = function(dataBase){
    for(const key in dataBase){
        if(dataBase.hasOwnProperty(key)){
            return result = dataBase[key];
        } else if(dataBase[key] === undefined){
            return null;
        }
    }
    return ;
}
const filtered = sample(languages[lang])

// if(process.argv[2].length <= 0){
    // console.log('undefined')
    // return null;
// } else {
    // console.log('not undefined')
    // return lang = process.argv[2]
// }
// process.argv[2].length <
// console.log(process.argv[2].length)