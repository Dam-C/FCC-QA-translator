const { match } = require('assert');
const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

const reverseDict = (obj) => {
  return Object.fromEntries(Object.entries(obj).map(([k,v]) => [v, k]));
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
    let finalRet;
    const lowTxt = text.toLowerCase();
    const matchesMap = new Map();
    // check titles
    for (const [k,v] of Object.entries(titles)) {
        if (lowTxt.includes(k)) {
            matchesMap.set(k, v.charAt(0).toUpperCase() + v.slice(1));
        }
    }
    // check spaced words
    for (const [k, v] of Object.entries(dict)) {
        if (k.includes(' ') && lowTxt.includes(k)) {
            matchesMap.set(k, v);
        }
    }
    // words matches
    for (const w of lowTxt.match(/(\w+([-'](\w+)?)?)/g) || []) {
        if (dict[w]) matchesMap.set(w, dict[w]);
    }
    // time matches
    for (const m of text.match(timeRegex) || []) {
        matchesMap.set(m, locale === 'toUK' ? m.replace(':', '.') : m.replace('.', ':'))
    }
    if (matchesMap.size === 0) {
        finalRet = [text, text]
    } else {
        finalRet = [ 
            this.replace(text, matchesMap), 
            this.replaceWithHighlight(text, matchesMap)
        ]
    };
    return finalRet;
  }

  replace(text, matches) {
    const re = new RegExp([...matches.keys()].join('|'), 'gi');
    return text.replace(re, (m) => matches.get(m.toLowerCase()));
  }
  
  replaceWithHighlight(text, matches) {
    const re = new RegExp([...matches.keys()].join('|'), 'gi');
    return text.replace(re, (m) => `<span class="highlight">${matches.get(m.toLowerCase())}</span>`);
  }
}

module.exports = Translator;