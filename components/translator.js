const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

const reverseDict = (obj) => {
  return Object.assign({}, ...Object.entries(obj).map(([k,v]) => ({[v]: k})));
}

class Translator {
  
  uk2us(text) {
    const dict = { ...britishOnly, ...reverseDict(americanToBritishSpelling) };
    const titles = reverseDict(americanToBritishTitles);
    const timeRegex = /([1-9]|1[012])\.[0-5][0-9]/g;
    return this.translate(text, dict, titles, timeRegex, 'toUS');
  }

  us2uk(text) {
    const dict = { ...americanOnly, ...americanToBritishSpelling };
    const titles = americanToBritishTitles;
    const timeRegex = /([1-9]|1[012]):[0-5][0-9]/g;
    return this.translate(text, dict, titles, timeRegex, 'toUK');
  }

  translate(text, dict, titles, timeRegex, locale) {
    const lowTxt = text.toLowerCase();
    const matchesMap = {};

    // check titles
    Object.entries(titles).forEach(([k, v]) => {
      if (lowTxt.includes(k)) {
        matchesMap[k] = v[0].toUpperCase() + v.slice(1);
      }
    });

    // check spaced words
    const spacedWords = Object.fromEntries(
      Object.entries(dict).filter(([k, v]) => k.includes(' '))
    );
    
    Object.entries(spacedWords).forEach(([k, v]) => {
      if (lowTxt.includes(k)) {
        matchesMap[k] = v;
      }
    });

    // words matches
    lowTxt.match(/(\w+([-'](\w+)?)?)/g).forEach((w) => {
      if (dict[w]) matchesMap[w] = dict[w];
    });

    // time matches
    const matches = text.match(timeRegex);
    if (matches) {
      matches.forEach((e) => {
        if (locale === 'toUK') {
          matchesMap[e] = e.replace(':', '.');
        } else {
          matchesMap[e] = e.replace('.', ':');
        }
      });
    }

    if (Object.keys(matchesMap).length === 0) return [text, text];

    const translation = this.replace(text, matchesMap);
    const translationHL = this.replaceWithHighlight(text, matchesMap);
    return [translation, translationHL];
  }

  replace(text, matches) {
    const re = new RegExp(Object.keys(matches).join('|'), 'gi');
    return text.replace(re, (m) => matches[m.toLowerCase()]);
  }
  
  replaceWithHighlight(text, matches) {
    const re = new RegExp(Object.keys(matches).join('|'), 'gi');
    return text.replace(re, (m) => `<span class="highlight">${matches[m.toLowerCase()]}</span>`);
  }
}

module.exports = Translator;
