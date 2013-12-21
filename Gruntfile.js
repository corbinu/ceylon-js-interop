/*global module:false*/
module.exports = function(grunt) {

	grunt.initConfig({
		exec: {
			build: {
				command: 'ceylon compile-js com.openswimsoftware.ceylon.js.language com.openswimsoftware.ceylon.js.json com.openswimsoftware.ceylon.js.html com.openswimsoftware.ceylon.js.dom com.openswimsoftware.ceylon.js.file com.openswimsoftware.ceylon.js.xmlhttprequest com.openswimsoftware.ceylon.js.jquery com.openswimsoftware.ceylon.js.node'
			}
		}
	});

	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('default', ['exec:build']);

};