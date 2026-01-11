'use strict';

const test = require('supertape');
const fullstore = require('..');

test('fullstore: get value', (t) => {
    const value = fullstore();
    
    t.equal(undefined, value(), 'shold return value');
    t.end();
});

test('fullstore: set value', (t) => {
    const value = fullstore();
    value('hello');
    
    t.equal('hello', value(), 'shold return value');
    t.end();
});

test('fullstore: initial value', (t) => {
    const value = fullstore('hello');
    
    t.equal('hello', value(), 'shold return value');
    t.end();
});

test('fullstore: set value: return', (t) => {
    const value = fullstore();
    const result = value('hello');
    
    t.equal(result, 'hello', 'shold return value');
    t.end();
});
