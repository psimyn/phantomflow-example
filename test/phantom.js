var flow = require('phantomflow').init({});

flow.run(function(code) {
  process.exit(code);
});
