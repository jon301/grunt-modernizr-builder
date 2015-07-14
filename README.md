# grunt-modernizr-builder v0.1.1

[![Build Status: Linux](https://travis-ci.org/jon301/grunt-modernizr-builder.svg?branch=master)](https://travis-ci.org/jon301/grunt-modernizr-builder) [![Build status: Windows](https://ci.appveyor.com/api/projects/status/8flhe7xy7n89akh8/branch/master?svg=true)](https://ci.appveyor.com/project/jon301/grunt-modernizr-builder/branch/master)
[![Dependency Status](https://david-dm.org/jon301/grunt-modernizr-builder.svg)](https://david-dm.org/jon301/grunt-modernizr-builder) [![devDependency Status](https://david-dm.org/jon301/grunt-modernizr-builder/dev-status.svg)](https://david-dm.org/jon301/grunt-modernizr-builder#info=devDependencies) [![peerDependency Status](https://david-dm.org/jon301/grunt-modernizr-builder/peer-status.svg)](https://david-dm.org/jon301/grunt-modernizr-builder#info=peerDependencies)

> Build a customized version of Modernizr based on your needs.

[![NPM](https://nodei.co/npm/grunt-modernizr-builder.png)](https://nodei.co/npm/grunt-modernizr-builder/)

*Note*: This plugin uses version 3 of Modernizr.



## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
npm install grunt-modernizr-builder --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with
this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-modernizr-builder');
```



## Modernizr builder task
_Run this task with the `grunt modernizr_builder` command._

### Options

#### config
Type: `String`

Path to a JSON file containing Modernizr configuration.
See [config-all.json](https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json) for all available options.

#### features
Type: `String`

Comma separate list of feature detects.

#### options
Type: `String`

Comma separate list of extensibility options.

####  dest
Type: `String`
Default: `./modernizr.js`

Path to write the Modernizr build file to.

####  uglify
Type: `Boolean`
Default: false

### Usage Examples

There are two formats you can use to run this task.

#### Use a JSON file containing Modernizr configuration

```js
modernizr_builder: {
    build: {
        options: {
            config: 'path/to/config.json',
            dest: 'path/to/modernizr-custom.js'
        }
    }
}
```

#### Use `features` and `options` options

```js
modernizr_builder: {
    build: {
        options: {
            features: 'ambientlight,applicationcache,audioloop',
            options: 'atRule,prefixedCSS,testStyles',
            dest: 'path/to/modernizr-custom.js'
        }
    }
}
```



## License

MIT © Jonathan Trang

