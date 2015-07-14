# grunt-modernizr-builder v0.1.0 [![Build Status: Linux](https://travis-ci.org/jon301/grunt-modernizr-builder.svg?branch=master)](https://travis-ci.org/jon301/grunt-modernizr-builder)


> Build a customized version of Modernizr based on your needs.



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

Path to a JSON file containing Modernizr configuration. See [config-all.json](https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json) for all available options.

#### features
Type: `String`

Comma seperate list of feature detects. e.g. 'ambientlight,applicationcache,audioloop'

#### options
Type: `String`

Comma seperate list of extensibility options. e.g. 'atRule,prefixedCSS,testStyles'

####  dest
Type: `String`
Default: ./modernizr.js

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

[MIT License](http://opensource.org/licenses/MIT)

