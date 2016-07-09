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
    timeout: 15000
  },
  sync: true
};
