'use strict';
const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function(){
  describe('#sayHay', function() {
    it('should return hey john!', function(){
      var result = great.sayHey('john');
      assert.ok(result === 'hey john!', 'not equal to hey john!');

    });
    it('should throw a missing name error',function (){
      assert.throws(function(){
        greet.sayHey();
      }, 'error not thrown');
      });
    });
  describe ('#sayBye',function(){
    it('should return see ya later!',function(){
      var bye = greet.sayBye();
      arrert.ok (bye === 'see ya later!', 'not equal error');
    })
  });
});