var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('教你所想學的，用眼樂讀');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('教你所想學的，用眼樂讀 - Google Search'), 3000);
driver.quit();
