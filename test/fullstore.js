'use strict';

const fullstore = require('..');
const test = require('tape');

test('fullstore: get value', t => {
    const value = fullstore();
    
    t.equal(undefined, value(), 'shold return value');
    t.end();
});

test('fullstore: set value', t => {
    const value = fullstore();
    value('hello');
    
    t.equal('hello', value(), 'shold return value');
    t.end();
});

