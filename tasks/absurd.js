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

        var files = grunt.file.expand(this.data.src);
        var api = Absurd(), f, options = this.data.options || {};
        if(options.morph) {
            api.morph(options.morph);
        }
        for(var i=0; i<files.length, f=files[i]; i++) {
            api.import(f);
        }
        api.compile(function(err, A, B) {
            if(err) {
                grunt.log.error("Absurd:" + err);
            } else {
                if(options.morph === "component") {
                    grunt.file.write(self.data.dest.css, A, {});
                    grunt.file.write(self.data.dest.html, B, {});
                } else {
                    grunt.file.write(self.data.dest, A, {});
                }
            }
        }, options);

    });
};
