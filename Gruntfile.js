module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    absurd: {
      css: {
        src: __dirname + "/tests/absurd/index.js",
        dest: __dirname + '/tests/css/styles.css',
        options: {
          minify: true
        }
      },
      html: {
        src: __dirname + "/tests/absurd/html.index.js",
        dest: __dirname + '/tests/html/code.html',
        options: {
          morph: "html"
        }
      }    
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: false,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        globals: {}
      },

      files: ['grunt.js', 'tasks/**/*.js']
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task.
  grunt.registerTask('default', ['jshint', 'absurd']);
};