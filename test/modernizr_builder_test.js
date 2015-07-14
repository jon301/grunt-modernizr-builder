'use strict';

var grunt = require('grunt');

/*
    ======== A Handy Little Nodeunit Reference ========
    https://github.com/caolan/nodeunit

    Test methods:
        test.expect(numAssertions)
        test.done()
    Test assertions:
        test.ok(value, [message])
        test.equal(actual, expected, [message])
        test.notEqual(actual, expected, [message])
        test.deepEqual(actual, expected, [message])
        test.notDeepEqual(actual, expected, [message])
        test.strictEqual(actual, expected, [message])
        test.notStrictEqual(actual, expected, [message])
        test.throws(block, [error], [message])
        test.doesNotThrow(block, [error], [message])
        test.ifError(value)
*/

exports.modernizr_builder = {
    setUp: function(done) {
        // setup here if necessary
        done();
    },
    config_option: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/modernizr_config_option.js');
        var expected = grunt.file.read('test/expected/modernizr_config_option.js');
        test.equal(actual, expected, 'should generate a custom Modernizr file according to `config` option');

        test.done();
    },
    features_option: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/modernizr_features_option.js');
        var expected = grunt.file.read('test/expected/modernizr_features_option.js');
        test.equal(actual, expected, 'should generate a custom Modernizr file according to `features` option');

        test.done();
    },
    options_option: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/modernizr_options_option.js');
        var expected = grunt.file.read('test/expected/modernizr_options_option.js');
        test.equal(actual, expected, 'should generate a custom Modernizr file according to `options` option');

        test.done();
    }
};
