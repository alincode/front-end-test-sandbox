var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('http://blog.mokayo.com/')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
        // Title is: 教你所想學的，用眼樂讀 - blog.mokayo.com
    })
    .end();
