module.exports = function(grunt) {

	grunt.initConfig({
		absurd: {
			task: {
				src: __dirname + "/css/absurd/index.js",
				dest: 'css/styles.css'
			}
		},
		watch: {
			css: {
				files: ['css/absurd/**/*.js'],
				tasks: ['absurd']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-absurd');

	// grunt.registerTask('default', ['concat', 'less']);
	grunt.registerTask('default', ['absurd', 'watch']);

}