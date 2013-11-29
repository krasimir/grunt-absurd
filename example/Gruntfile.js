module.exports = function(grunt) {

	grunt.initConfig({
		absurd: {
			css: {
				src: __dirname + "/css/absurd/index.js",
				dest: __dirname + '/css/styles.css',
				options: {
					minify: false
				}
			},
			html: {
				src: __dirname + "/html/absurd/index.js",
				dest: __dirname + '/html/page.html',
				options: {
					morph: "html",
					minify: true
				}
			}
		},
		watch: {
			css: {
				files: [
					'css/absurd/**/*.js',
					'html/absurd/**/*.js'
				],
				tasks: ['absurd']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-absurd');

	// grunt.registerTask('default', ['concat', 'less']);
	grunt.registerTask('default', ['absurd', 'watch']);

}