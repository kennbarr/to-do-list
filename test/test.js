var path = require('path');
var expect = require('chai');

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

  it("has content", function(){
    expect(this.browser).to.contain('TO DO List');
  });



});
