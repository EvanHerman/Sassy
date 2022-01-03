const sass = require( 'node-sass' );

module.exports = function( grunt ) {

  grunt.initConfig( {
    jshint: {
      all: [ 'src/library/js/*.js' ]
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: false
      },
      dist: {
        files: {
          './src/library/css/main.css': './src/library/scss/main.scss'
        }
      }
    },
    watch: {
      js: {
        files: [ 'src/library/js/*.js' ],
        tasks: [ 'jshint' ]
      },
      scss: {
        files: [ 'src/library/scss/*.scss' ],
        tasks: [ 'sass' ]
      }
    }
  } );

  require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

  grunt.registerTask( 'default', [ 'sass' ] );

};
