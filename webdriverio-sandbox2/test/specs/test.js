var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
global.should = chai.should();

describe('mokayo', function() {
    it('check title', function() {
        browser.url('http://blog.mokayo.com/');
        var title = browser.getTitle();
        title.should.be.equal('教你所想學的，用眼樂讀 - blog.mokayo.com'); 
    });
}); 
