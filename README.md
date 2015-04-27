# grunt-console-line-number-plugin

This plugin will replace add the source file and line number to every console logging statement.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, b sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:


```
Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-console-line-number-plugin');
```

## The "line_number_plugin" task

### Overview
In your project's Gruntfile, add a section named `line_number_plugin` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  line_number_plugin: {
    your_target: {
      src: ['your_source', 'files'],
      dest: ['your_dest', 'files'],
      customLogger: 'myLogger'(optional)
    },
  },
});
```

### Usage Examples

#### Default Options
In this example, the input file `my_input_file.js` will be copied to `my_destination_file.js`, adding the source file and line number to every console statement(log,info,debug,trace,warn or error)

```js
grunt.initConfig({
  line_number_plugin: {
    files: {
      src: ['my_input_file.js'],
      dest: ['my_destination_file.js']
    },
  },
});
```

#### Advance option Options
##### customLogger 
Using this option will add a logging call to your custom logger in addition to the browser's console object.  

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
v0.1.1 - 2014-06-20

  * Fixed description

v0.1.0 - 2014-06-20

  * Initial release
  
