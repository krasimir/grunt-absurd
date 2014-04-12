/*
 * grunt-absurd
 * https://github.com/krasimir/grunt-absurd.git
 *
 * Copyright (c) 2013 Krasimir Tsonev
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var path = require('path'),
      chalk = require('chalk'), 
      Absurd = require('absurd'),
      api;

  grunt.registerMultiTask('absurd', 'Grunt plugin for AbsurdJS', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      require: [],
      morph: null,
      combineSelectors: true,
      minify: false,
      keepCamelCase: false,
      extCSS: '.css',
      extHTML: '.html'
    });

    // Iterate over all src-dest file pairs
    this.files.forEach(function(f) {
      // validate src files
      var srcFiles = f.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file ' + chalk.cyan(filepath) + ' not found.');
          return false;
        } else {
          return true;
        }
      });

      if (srcFiles.length === 0) {
        grunt.log.warn('Destination ' + chalk.cyan(f.dest) + ' not written because src files were empty. ');
        return;
      }

      api = Absurd();

      api.morph(options.morph);

      if (options.require.length > 0) {
        api.import(grunt.file.expand(options.require).map(function(file){
          return path.resolve(file);
        }));
      }

      api.import(srcFiles.map(function(file){
        return path.resolve(file);
      }));

      api.compile(function(err,A,B) {
        if (err) {
          grunt.log.error('Absurd:' + err);
          return;
        }

        if (options.morph === 'component') {
          grunt.file.write(path.resolve(f.dest) + options.extCSS, A);
          grunt.verbose.writeln('File ' + chalk.cyan(f.dest + options.extCSS) + ' created.');
          grunt.file.write(path.resolve(f.dest) + options.extHTML, B);
          grunt.verbose.writeln('File ' + chalk.cyan(f.dest + options.extHTML) + ' created.');
        } else {
          grunt.file.write(path.resolve(f.dest), A);
          grunt.verbose.writeln('File ' + chalk.cyan(f.dest) + ' created.');
        }
      }, options);
    });
  });
};
