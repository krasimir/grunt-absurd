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
      }
    }
  },
})
```

### Options

#### require

Type: `Array`
Default: `[]`

A list of files loaded before process the src files. 

#### extCSS

Type: `String`
Default: `.css`

The css file extension used in the output of `morph: "component"`

#### extHTML

Type: `String`
Default: `.html`

The html file extension used in the output of `morph: "component"`

#### Other Absurd Options

##### morph

Type: `null | 'html' | 'component'`
Default: `null`

##### combineSelectors

Type: `Boolean`
Default: `true`

##### minify

Type: `Boolean`
Default: `false`

##### keepCamelCase

Type: `Boolean`
DefaultL `false`

### Usage example

```js
...
  grunt.initConfig({
    testSrc: 'tests/data',
    testResult: 'tests/results',

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
...
```

Use [dynamic_mappings](http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically) to create separate output files. use `static_mappings` to create single output file. 
