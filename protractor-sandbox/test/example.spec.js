var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('angularjs homepage', function() {
  it('should have learn link.', function(done) {
    browser.get('http://www.angularjs.org');
    var myElement = element(by.css('.learn-link'))
    expect(myElement.getText()).to.eventually.equal('Learn Angular in your browser for free!');
    done();
  });
});
