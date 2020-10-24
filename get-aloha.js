// Your code here.
const languages = require('./db.js')

const getAloha = function(languageName){
    switch(languageName){
        case 'english':
            return languages.english;

        case 'spanish':
            return languages.spanish;

        case 'japanese':
            return languages.japanese;

        case 'russian':
            return languages.russian;

            case 'zulu':
            return languages.zulu;

        default:
            return "Sorry, that language is not in our database yet.";
    }
}
// const getAloha = function(languageName){
//     switch(languageName){
//         case 'english':
//             return console.log(languages.english);

//         case 'spanish':
//             return console.log(languages.spanish);

//         case 'japanese':
//             return console.log(languages.japanese);

//         case 'russian':
//             return console.log(languages.russian);

//         case 'zulu':
//             return console.log(languages.zulu);

//         default:
//             return console.log("Sorry, that language is not in our database yet.");
//     }
// }

// Our code here.
if (typeof getAloha === 'undefined') {
    getAloha = undefined;
}


module.exports = getAloha;
