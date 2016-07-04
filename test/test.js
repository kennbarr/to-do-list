var path = require('path');
var chai = require('chai');
var expect = chai.expect;

const Browser = require('zombie');
const http = require('http');

describe('Page Load', function() {

  before(function() {
    this.browser = new Browser({site: 'http://localhost:3000'});
    var createServer = require("http-server").createServer;
    var server = createServer({ root: path.join(__dirname, "../") });
    server.listen(3000);
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  it("page exists", function(){
    this.browser.assert.success();
  });

  it("lists TO DO tasks", function(){
    expect(this.browser.text('html')).to.include('ITEM 1');
    expect(this.browser.text('html')).to.include('ITEM 2');

  });

});
