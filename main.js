const languages = require('./get-aloha.js')


const userLanguage = process.argv[2].toLowerCase();
const languageName = userLanguage;
const result = languages(languageName);
