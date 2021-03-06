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


  describe('Task Functionality', function() {
    beforeEach(function(done) {
      this.browser.visit('/?json=test', done);
    });


    it("page exists", function(){
      this.browser.assert.success();
    });


    it("can add a task to to-do list", function(){
      addTask(this.browser);
      expect(this.browser.text('html')).to.include('New task');
    });

    it("can mark a task as completed", function(){
      addTask(this.browser);
      this.browser.pressButton('Completed');
      expect(this.browser.html('#list-container')).to.include("completed-task");
    });

    it('can filter out completed tasks', function() {
      addTask(this.browser);
      this.browser.pressButton('Completed');
      this.browser.pressButton('show-outstanding')
      expect(this.browser.html('#list-container')).to.include("hidden-task");
    });

    it('can filter out uncompleted tasks', function() {
      addTask(this.browser);
      this.browser.pressButton('show-completed')
      expect(this.browser.html('#list-container')).to.include("hidden-task");
    });

    it('shows all tasks', function() {
      addTask(this.browser);
      this.browser.pressButton('Completed');
      this.browser.pressButton('show-outstanding')
      addTask(this.browser);
      this.browser.pressButton('show-completed')
      this.browser.pressButton('show-all')
      expect(this.browser.html('#list-container')).to.not.include("hidden-task");
    });
  });

  describe('Ajax', function(){
    beforeEach(function(done) {
      this.browser.visit('/', done);
    });

    it('retrieves Marys stuff by default', function() {
      expect(this.browser.html('#list-container')).to.include("Go to the bank");
      expect(this.browser.html('#task-0')).to.include('active-task');
    });

  });

});


var addTask = function(browser){
  browser
  .fill('new-task-input', 'New task')
  .pressButton('submit');
};
