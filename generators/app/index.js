'use strict';
var yeoman = require('yeoman-generator');

var EmberJspmGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  writing: {
    app: function () {
      this.src.directory('app');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = EmberJspmGenerator;
