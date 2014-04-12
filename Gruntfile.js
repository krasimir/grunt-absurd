module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    testSrc: 'tests/data',
    testResult: 'tests/results',

    clean: ['<%= testResult %>'],

    absurd: {
      buildCSS: {
        options: {
          require: ['<%= testSrc %>/**/*.plugin.js'],
          minify: false,
          combineSelectors: false,
          keepCamelCase: true
        },
        expand: true,
        cwd: '<%= testSrc %>',
        src: ['**/*.css.js'],
        dest: '<%= testResult %>',
        ext: '.absurd.css'
      },
      compileCSS: {
        options: {
          require: ['<%= testSrc %>/**/*.plugin.js'],
          minify: false
        },
        src: ['<%= testSrc %>/**/*.css.js'],
        dest: '<%= testResult %>/compiledCSS.css',
      },
      buildHTML: {
        options: {
          minify: false,
          morph: 'html'
        },
        expand: true,
        cwd: '<%= testSrc %>/',
        src: ['**/*.html.js'],
        dest: '<%= testResult %>',
        ext: '.absurd.html'
      },
      compileHTML: {
        options: {
          minify: true,
          morph: 'html'
        },
        src: ['<%= testSrc %>/**/*.html.js'],
        dest: '<%= testResult %>/compiledHTML.html',
      },
      buildComponent: {
        options: {
          require: ['<%= testSrc %>/**/*.plugin.js'],
          minify: false,
          morph: 'component'
        },
        expand: true,
        cwd: '<%= testSrc %>/',
        src: ['**/*.component.js'],
        dest: '<%= testResult %>',
        ext: '.absurd'
      },
      compileComponent: {
        options: {
          require: ['<%= testSrc %>/**/*.plugin.js'],
          minify: true,
          morph: 'component'
        },
        src: ['<%= testSrc %>/**/*.component.js'],
        dest: '<%= testResult %>/compileComponent.absurd'
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

      files: ['Gruntfile.js', 'tasks/**/*.js']
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', ['jshint', 'clean', 'absurd']);
};
