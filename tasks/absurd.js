/*
 * grunt-absurd
 * https://github.com/krasimir/grunt-absurd.git
 *
 * Copyright (c) 2013 Krasimir Tsonev
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    var Absurd = require("absurd");

    grunt.registerMultiTask('absurd', 'Grunt plugin for AbsurdJS', function() {

        var self = this;

        if(typeof this.data.src === 'undefined') {
            grunt.log.error("Absurd: missing 'src'.");
            return;
        } else if(typeof this.data.dest === 'undefined') {
            grunt.log.error("Absurd: missing 'dest'.");
            return;
        }

        Absurd(this.data.src).compile(function(err, css) {
            if(err) {
                grunt.log.error("Absurd:" + err);
            } else {
                grunt.file.write(self.data.dest, css, {});
            }
        });


    });
};
