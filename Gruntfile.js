/*
 * grunt-line-number-plugin
 * https://github.com/sne11ius/grunt-line-number-plugin
 *
 * Copyright (c) 2014 Cornelius Lilge
 * Licensed under the GPL-3.0 license.
 */

'use strict';

module.exports = function (grunt) {

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

        clean: {
            tests: ['tmp']
        },

        line_number_plugin: {
            files: {
                src: ['test/fixtures/*'],
                dest: 'tmp/'
            }
        },

        nodeunit: {
            tests: ['test/*_test.js']
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt);

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'line_number_plugin', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
