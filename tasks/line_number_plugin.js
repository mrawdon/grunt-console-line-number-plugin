/*
 * grunt-line-number-plugin
 * https://github.com/sne11ius/grunt-line-number-plugin
 *
 * Copyright (c) 2014 Cornelius Lilge
 * Licensed under the GPL-3.0 license.
 */

'use strict';

module.exports = function (grunt) {

	grunt.registerMultiTask('line_number_plugin', 'Ye olde c style "__file__" replacer.', function () {
		this.files.forEach(function (f) {
            if (!f.src || !f.src.length) {
                grunt.log.error(JSON.stringify(f));
                grunt.log.error('Must give source file.');
                return false;
            }
            if (!f.dest || !f.dest.length) {
                grunt.log.error(JSON.stringify(f));
                grunt.log.error('Must give dest file.');
                return false;
            }
            /*if (f.src.length !== f.dest.length) {
                grunt.log.error(JSON.stringify(f));
                grunt.log.error('Must give exactly one destination per source file.');
                return false;
            }*/
			for (var i = 0; i < f.src.length; ++i) {
                
				var src = f.src[i],
					filename = src.substring(src.lastIndexOf('/')+1);
                if (!grunt.file.exists(src)) {
                    grunt.log.warn('Source does not exist: ' + src);
                    continue;
                }
                if (!grunt.file.isFile(src)) {
                    grunt.log.warn('Source is not a file: ' + src);
                    continue;
                }
                grunt.log.writeln(src + ' -> ' + f.dest);

                var lineNumber = 1,
                    result = '',
                    re = new RegExp('(console\\.(log|warn|info|error|trace|debug)\\()([^;]+);');
                //noinspection JSUnresolvedFunction
				require('fs').readFileSync(src).toString().split(/\r?\n/).forEach(function(line){
                    var match = line.match(re);
					if(match){
						//0 everything, 1 console.log, 2 log 3 message
						var logDetail = "'"+src+':'+lineNumber+"'";
						var replacement = match[1]+logDetail+",";
						if(f.customLogger){
							replacement = f.customLogger+'.'+match[2]+"("+logDetail+','+match[3]+';'+replacement;
						}
						result +=  line.replace(match[1], replacement) + grunt.util.linefeed;
					}else{
						result +=  line + grunt.util.linefeed;
					}
					lineNumber++;
                });
                grunt.file.write(f.dest, result.trim() + grunt.util.linefeed);
            }
        });
    });
};
