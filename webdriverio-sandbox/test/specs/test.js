describe('DuckDuckGo search', function() {
    it('searches for WebdriverIO', function() {
        browser.url('http://blog.mokayo.com/');
        var title = browser.getTitle();
        console.log('Title is: ' + title);
        // Title is: 教你所想學的，用眼樂讀 - blog.mokayo.com
    });
});
