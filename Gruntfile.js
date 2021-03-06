/*
 * grunt-modernizr-builder
 * https://github.com/jon301/grunt-modernizr-builder
 *
 * Copyright (c) 2015-2016 Jonathan Trang
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        modernizr_builder: {
            config_option: {
                options: {
                    config: 'test/fixtures/config_option.json',
                    dest: 'tmp/modernizr_config_option.js'
                }
            },
            features_option: {
                options: {
                    features: 'ambientlight,applicationcache,audioloop',
                    dest: 'tmp/modernizr_features_option.js'
                }
            },
            options_option: {
                options: {
                    options: 'atRule,prefixedCSS,testStyles',
                    dest: 'tmp/modernizr_options_option.js'
                }
            },
            uglify_option: {
                options: {
                    features: 'ambientlight,applicationcache,audioloop',
                    dest: 'tmp/modernizr_uglify_option.js',
                    uglify: true
                }
            },
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'modernizr_builder', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
