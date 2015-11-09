module.exports = {
  load: function() {
    casper.thenOpen('http://localhost:3000');
  };
};
