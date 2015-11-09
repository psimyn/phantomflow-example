var homepage = require('../pages/home.page.js');

(function() {
  flow('homepage', function() {
    step('Load it', homepage.load());
  });
})();
