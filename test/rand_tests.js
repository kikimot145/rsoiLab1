// division-by-zero-test.js

var vows = require('vows'),
    assert = require('assert');
	
var my_math = require('../lib/myMeth');

// Create a Test Suite
vows.describe('').addBatch({
    'Перемножение 0 и 10: ': {
        topic: my_math.multiplication(0,10),

        'Получаем в результате 0: ': function (topic) {
            assert.equal (topic, 0);
        }
    },
	'Перемножение 10 и 0: ': {
        topic: my_math.multiplication(10,0),

        'Получаем в результате 0: ': function (topic) {
            assert.equal (topic, 0);
        }
    },
    'Перемножение 3 и 8': {
        topic: my_math.multiplication(3,8),

        'Получим в результате 24: ': function (topic) {
            assert.equal (topic, 24);
        }
    }
}).exportTo(module);