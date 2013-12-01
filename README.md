# grunt-absurd

> Grunt plugin for AbsurdJS ([https://github.com/krasimir/absurd](https://github.com/krasimir/absurd))

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-absurd
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-absurd');
```

## The "absurd" task

### Overview
In your project's Gruntfile, add a section named `absurd` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  absurd: {
    task: {
      src: 'path to your .js file',
      dest: 'path to your .css file',
      options: {
        minify: true,
        morph: "html"
      }
    }
  },
})
```

### Usage example

```js
module.exports = function(grunt) {

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
```

In this example grunt watches for changes of your .js files and notify AbsurdJS. It later compiles the files to CSS and HTML.