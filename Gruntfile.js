module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    absurd: {
      css: {
        src: [__dirname + "/tests/data/css/**/*.js"],
        dest: __dirname + '/tests/styles.css',
        options: {
          minify: false
        }
      },
      html: {
        src: __dirname + "/tests/data/html/page.js",
        dest: __dirname + "/tests/page.html",
        options: {
          morph: "html"
        }
      },
      component: {
        src: __dirname + "/tests/data/component/**/*.js",
        dest: {
          css: __dirname + "/tests/component.css",
          html: __dirname + "/tests/component.html"
        },
        options: {
          morph: "component"
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