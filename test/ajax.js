var Ajax = require('../lib/ajax.js');

var chai = require('chai');
var expect = chai.expect;

describe('Ajax unit test', function(){

  it('works', function(done){ 
   var url = 'http:marysurl';
    Ajax(url, function(data){
      console.log('======================');
      expect(data).to.include('Go to bank');
      done();
    });
  });
 



});
