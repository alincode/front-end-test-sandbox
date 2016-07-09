var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('angularjs website', function() {
  it('should have learn link.', function(done) {
    browser.get('http://www.angularjs.org');
    var myElement = element(by.css('.learn-link'))
    expect(myElement.getText()).to.eventually.equal(
      'Learn Angular in your browser for free!');
    done();
  });

  it('no angularjs website', function(done) {
    browser.driver.get('http://webdriver.io/');
    var myElement = browser.driver.findElement(by.css('h2'));
    expect(myElement.getText()).to.eventually.equal(
      'Selenium 2.0 bindings for NodeJS');
    done();
  });

  it('more elegant', function(done) {
    browser.driver.get('http://webdriver.io/');
    var myElement = dvr.findElement(by.css('h2'));
    expect(myElement.getText()).to.eventually.equal(
      'Selenium 2.0 bindings for NodeJS');
    done();
  });
});
