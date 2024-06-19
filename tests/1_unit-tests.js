const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const tr = new Translator();


suite('Unit Tests', () => {
    suite('To british english', () => {
        test('Translate Mangoes are my favorite fruit. to British English', (done) => {
            assert.isArray(tr.us2uk('Mangoes are my favorite fruit.'))
            assert.deepEqual(tr.us2uk('Mangoes are my favorite fruit.'), [
                'Mangoes are my favourite fruit.',
                'Mangoes are my <span class=\"highlight\">favourite</span> fruit.'
            ])
            done();
        })
        test('Translate I ate yogurt for breakfast. to British English',(done) => {
            assert.isArray(tr.us2uk('I ate yogurt for breakfast.'))
            assert.deepEqual(tr.us2uk('I ate yogurt for breakfast.'), [
                'I ate yoghurt for breakfast.',
                'I ate <span class=\"highlight\">yoghurt</span> for breakfast.'
            ])
            done();
        })
        
        
        test('Translate We had a party at my friend\'s condo. to British English',(done) => {
            assert.isArray(tr.us2uk('We had a party at my friend\'s condo.'))
            assert.deepEqual(tr.us2uk('We had a party at my friend\'s condo.'), [
                'We had a party at my friend\'s flat.',
                'We had a party at my friend\'s <span class=\"highlight\">flat</span>.'
            ])
            done();
        })
        
        
        test('Translate Can you toss this in the trashcan for me? to British English',(done) => {
            assert.isArray(tr.us2uk('Can you toss this in the trashcan for me?'))
            assert.deepEqual(tr.us2uk('Can you toss this in the trashcan for me?'), [
                'Can you toss this in the bin for me?',
                'Can you toss this in the <span class=\"highlight\">bin</span> for me?'
            ])
            done();
        })
        
        
        test( 'Translate The parking lot was full. to British English',(done) => {
            assert.isArray(tr.us2uk('The parking lot was full.'))
            assert.deepEqual(tr.us2uk('The parking lot was full.'), [
                'The car park was full.',
                'The <span class=\"highlight\">car park</span> was full.'
            ])
            done();
        })
        
        
        test('Translate Like a high tech Rube Goldberg machine. to British English',(done) => {
            assert.isArray(tr.us2uk('Like a high tech Rube Goldberg machine.'))
            assert.deepEqual(tr.us2uk('Like a high tech Rube Goldberg machine.'), [
                'Like a high tech Heath Robinson device.',
                'Like a high tech <span class=\"highlight\">Heath Robinson device</span>.'
            ])
            done();
        })
        
        
        test('Translate To play hooky means to skip class or work. to British English',(done) => {
            assert.isArray(tr.us2uk('To play hooky means to skip class or work.'))
            assert.deepEqual(tr.us2uk('To play hooky means to skip class or work.'), [
                'To bunk off means to skip class or work.',
                'To <span class=\"highlight\">bunk off</span> means to skip class or work.'
            ])
            done();
        })
        
        
        test('Translate No Mr. Bond, I expect you to die. to British English',(done) => {
            assert.isArray(tr.us2uk('No Mr. Bond, I expect you to die.'))
            assert.deepEqual(tr.us2uk('No Mr. Bond, I expect you to die.'), [
                'No Mr Bond, I expect you to die.',
                'No <span class=\"highlight\">Mr</span> Bond, I expect you to die.'
            ])
            done();
        })
        
        
        test('Translate Dr. Grosh will see you now. to British English',(done) => {
            assert.isArray(tr.us2uk('Dr. Grosh will see you now.'))
            assert.deepEqual(tr.us2uk('Dr. Grosh will see you now.'), [
                'Dr Grosh will see you now.',
                '<span class=\"highlight\">Dr</span> Grosh will see you now.'
            ])
            done();
        })
        
        
        test('Translate Lunch is at 12:15 today. to British English',(done) => {
            assert.isArray(tr.us2uk('Lunch is at 12:15 today.'))
            assert.deepEqual(tr.us2uk('Lunch is at 12:15 today.'), [
                'Lunch is at 12.15 today.',
                'Lunch is at <span class=\"highlight\">12.15</span> today.'
            ])
            done();
        })
        
    })
    
    suite('To american english', () => {
        
        test('Translate We watched the footie match for a while. to American English',(done) => {
            assert.isArray(tr.uk2us('We watched the footie match for a while.'))
            assert.deepEqual(tr.uk2us('We watched the footie match for a while.'), [
                'We watched the soccer match for a while.',
                'We watched the <span class=\"highlight\">soccer</span> match for a while.'
            ])
            done();
        })
        
        test('Translate Paracetamol takes up to an hour to work. to American English',(done) => {
            assert.isArray(tr.uk2us('Paracetamol takes up to an hour to work.'))
            assert.deepEqual(tr.uk2us('Paracetamol takes up to an hour to work.'), [
                'Tylenol takes up to an hour to work.',
                '<span class=\"highlight\">Tylenol</span> takes up to an hour to work.'
            ])
            done();
        })
        
        test('Translate First, caramelise the onions. to American English',(done) => {
            assert.isArray(tr.uk2us('First, caramelise the onions.'))
            assert.deepEqual(tr.uk2us('First, caramelise the onions.'), [
                'First, caramelize the onions.',
                'First, <span class=\"highlight\">caramelize</span> the onions.'
            ])
            done();
        })
        
        test('Translate I spent the bank holiday at the funfair. to American English',(done) => {
            assert.isArray(tr.uk2us('I spent the bank holiday at the funfair.'))
            assert.deepEqual(tr.uk2us('I spent the bank holiday at the funfair.'), [
                'I spent the public holiday at the carnival.',
                'I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>.'
            ])
            done();
        })
        
        test('Translate I had a bicky then went to the chippy. to American English',(done) => {
            assert.isArray(tr.uk2us('I had a bicky then went to the chippy.'))
            assert.deepEqual(tr.uk2us('I had a bicky then went to the chippy.'), [
                'I had a cookie then went to the fish-and-chip shop.',
                'I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>.'
            ])
            done();
        })
        
        test('Translate I\'ve just got bits and bobs in my bum bag. to American English',(done) => {
            assert.isArray(tr.uk2us('I\'ve just got bits and bobs in my bum bag.'))
            assert.deepEqual(tr.uk2us('I\'ve just got bits and bobs in my bum bag.'), [
                'I\'ve just got odds and ends in my fanny pack.',
                'I\'ve just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.'
            ])
            done();
        })
        
        test('Translate The car boot sale at Boxted Airfield was called off. to American English',(done) => {
            assert.isArray(tr.uk2us('The car boot sale at Boxted Airfield was called off.'))
            assert.deepEqual(tr.uk2us('The car boot sale at Boxted Airfield was called off.'), [
                'The swap meet at Boxted Airfield was called off.',
                'The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off.'
            ])
            done();
        })
        
        test('Translate Have you met Mrs Kalyani? to American English',(done) => {
            assert.isArray(tr.uk2us('Have you met Mrs Kalyani?'))
            assert.deepEqual(tr.uk2us('Have you met Mrs Kalyani?'), [
                'Have you met Mr.s Kalyani?',
                'Have you met <span class=\"highlight\">Mr.</span>s Kalyani?'
            ])
            done();
        })
        
        test('Translate Prof Joyner of King\'s College, London. to American English',(done) => {
            assert.isArray(tr.uk2us('Prof Joyner of King\'s College, London.'))
            assert.deepEqual(tr.uk2us('Prof Joyner of King\'s College, London.'), [
                'Prof. Joyner of King\'s College, London.',
                '<span class=\"highlight\">Prof.</span> Joyner of King\'s College, London.'
            ])
            done();
        })
        
        test('Translate Tea time is usually around 4 or 4.30. to American English',(done) => {
            assert.isArray(tr.uk2us('Tea time is usually around 4 or 4.30.'))
            assert.deepEqual(tr.uk2us('Tea time is usually around 4 or 4.30.'), [
                'Tea time is usually around 4 or 4:30.',
                'Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.'
            ])
            done();
        })
        
    })
    
    
    suite('Highlight translations', () => {
        
        test('Highlight translation in Mangoes are my favorite fruit.',(done) => {
            assert.equal(tr.us2uk(
                'Mangoes are my favorite fruit.')[1],
                'Mangoes are my <span class=\"highlight\">favourite</span> fruit.')
            done();
        })
        
        test('Highlight translation in I ate yogurt for breakfast.',(done) => {
            assert.equal(tr.us2uk(
                'I ate yogurt for breakfast.')[1],
                'I ate <span class=\"highlight\">yoghurt</span> for breakfast.')
            done();
        })
        
        test('Highlight translation in We watched the footie match for a while.',(done) => {
            assert.equal(tr.uk2us(
                'We watched the footie match for a while.')[1],
                'We watched the <span class=\"highlight\">soccer</span> match for a while.')
            done();
        })
        
        test('Highlight translation in Paracetamol takes up to an hour to work.',(done) => {
            assert.equal(tr.uk2us(
                'Paracetamol takes up to an hour to work.')[1],
                '<span class=\"highlight\">Tylenol</span> takes up to an hour to work.')
            done();
        })
        
    })
});
