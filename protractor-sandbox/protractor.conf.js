exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'mocha',

  specs: [
    'test/*.spec.js'
  ],

  ccapabilities: {
    'browserName': 'chrome'
  },

  mochaOpts: {
    reporter: 'spec',
    timeout: 60 * 30 * 1000
  },
  onPrepare: function() {
    global.dvr = browser.driver;
  }
};
