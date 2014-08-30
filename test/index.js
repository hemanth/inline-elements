var inlineElements = require('../');
var assert = require('assert');

assert(inlineElements.indexOf('head') === -1, '<head> is not an inline element');
assert(inlineElements.indexOf('big') !== -1, '<big> is an inline element');
