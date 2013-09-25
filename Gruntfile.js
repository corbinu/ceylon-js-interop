/*global module:false*/
module.exports = function(grunt) {

	grunt.initConfig({
		exec: {
			build: {
				command: '$CEYLON_HOME/bin/ceylon compile-js ceylon.js.language ceylon.js.json ceylon.js.html ceylon.js.dom ceylon.js.file ceylon.js.xmlhttprequest ceylon.js.jquery ceylon.js.node'
			}/*,
			build: {
				command: 'ceylon compile-js ceylon.js.language ceylon.js.json ceylon.js.html ceylon.js.dom ceylon.js.file ceylon.js.xmlhttprequest ceylon.js.jquery ceylon.js.node'
			}*/
		}
	});

	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('default', ['exec:build']);

};