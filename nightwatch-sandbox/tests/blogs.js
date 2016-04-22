module.exports = {
  '載入Blog': function (client) {
    client
      .url('http://blog.mokayo.com')
      .waitForElementVisible('body', 1000)
      .assert.title('教你所想學的，用眼樂讀 - blog.mokayo.com')
      .end();
  }
};
