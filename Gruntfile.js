module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    absurd: {
      css: {
        src: __dirname + "/tests/data/absurd/index.js",
        dest: __dirname + '/tests/data/result/styles.css',
        options: {
          minify: true
        }
      },
      html: {
        src: __dirname + "/tests/data/absurd/html.index.js",
        dest: __dirname + '/tests/data/result/code.html',
        options: {
          morph: "html"
        }
      },
      component: {
        src: __dirname + "/tests/data/absurd/component.index.js",
        dest: {
          css: __dirname + '/tests/data/result/component.css',
          html: __dirname + '/tests/data/result/component.html'
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