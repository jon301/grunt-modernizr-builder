/*
 * grunt-modernizr-builder
 * https://github.com/jon301/grunt-modernizr-builder
 *
 * Copyright (c) 2015 Jonathan Trang
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('modernizr_builder', 'Build a customized version of Modernizr based on your needs.', function() {
        var path = require('path');
        var fs = require('fs');
        var exec = require('child_process').exec;

        // npm 3.X
        var flattenedBin = path.join(process.cwd(), 'node_modules/.bin/modernizr');
        // npm 2.X or npm 3.X + dependency conflicts
        var nestedBin = path.join(process.cwd(), 'node_modules/grunt-modernizr-builder/node_modules/.bin/modernizr');
        var cmd = [fs.existsSync(nestedBin) ? nestedBin : flattenedBin];
        var value = null;
        var key = null;

        // default options
        var options = this.options({
            features: null,  // comma seperate list of feature detects
            options:  null,  // comma seperate list of extensibility options
            config:   null,  // path to a JSON file containing Modernizr configuration. See lib/config-all.json for an example
            dest:     null,  // path to write the Modernizr build file to. Defaults to ./modernizr.js
            metadata: null,  // path to where the Modernizr feature-detect metadata should be saved. Defaults to ./metadata.json
            uglify:   null,  // uglify/minify the output
            quiet:    null   // silence all output
        });

        // build command
        for (key in options) {
            value =  options[key];
            if (value) {
                cmd.push('--' + key, value);
            }
        }

        // exec command
        cmd = cmd.join(' ');
        grunt.log.write(cmd + '\n');
        exec(cmd, function(done, error, stdout, stderr) {
            if (null !== error) {
                grunt.log.error(error);
            } else {
                grunt.log.ok(stdout);
            }
            done();
        }.bind(null, this.async()));
    });
};

