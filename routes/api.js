'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const {text, locale} = req.body;
      let finalRes;
      if (!locale || text === undefined) {
        finalRes = {error: 'Required field(s) missing'};
      } else if (text == '') {
        finalRes = {error: 'No text to translate'};
      } else if (locale !== 'british-to-american' && locale !== 'american-to-british'){
        finalRes = {error: 'Invalid value for locale field'};
      } else {
        let translation;
        if(locale === 'american-to-british'){
          translation = translator.us2uk(text);
        }
        if(locale === 'british-to-american'){
          translation = translator.uk2us(text);
        }
        if (text === translation[1] || !translation) {
          finalRes = {text, translation: 'Everything looks good to me!'}
        } else {
          finalRes = {text, translation: translation[1]}
        }
      }
      res.send(finalRes);
    });
};
