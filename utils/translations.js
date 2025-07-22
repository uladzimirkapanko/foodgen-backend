const path = require('path');
const fs = require('fs');

function getTranslations(lang) {
    const defaultLang = 'en';
    let translations = {};
    try {
        const filePath = path.join(__dirname, '..', 'translations', `${lang}.json`);
        if (fs.existsSync(filePath)) {
            translations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        } else {
            const defaultPath = path.join(__dirname, '..', 'translations', `${defaultLang}.json`);
            translations = JSON.parse(fs.readFileSync(defaultPath, 'utf-8'));
        }
    } catch (e) {
        translations = {};
    }
    return translations;
}

module.exports = { getTranslations };
