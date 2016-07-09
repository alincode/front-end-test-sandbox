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

  it('used react and no serverside render website', function(done) {
    browser.driver.get('https://www.evereasyfoods.com.tw');
    var newLink = dvr.findElement(by.css("[href='/news/活動訊息']"));
    newLink.click();
    browser.sleep(6000);
    var news1 = dvr.findElement(by.css(".news-list-item h2"));
    expect(news1.getText()).to.eventually.equal(
      '慶端午，GABA店鋪特製牛蒡粽限定販賣。');
    done();
  });
});
