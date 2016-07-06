var Ajax = require('../lib/ajax.js').fetchContent;
var chai = require('chai');
var expect = chai.expect;

describe('Ajax unit test', function(){

  it('works', function(done){
   var url = "http://quiet-beach-24792.herokuapp.com/todos.json";
    Ajax(url, function(data){
      expect(data).to.include('Go to the bank');
      done();
    });
  });
});
