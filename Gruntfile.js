const sass = require( 'node-sass' );

module.exports = function( grunt ) {

  grunt.initConfig( {
    jshint: {
      all: [ 'src/library/js/*.js' ]
    },
    sass: {
        options: {
            implementation: sass,
            sourceMap: true
        },
        dist: {
            files: {
                'main.css': 'main.scss'
            }
        }
    },
    watch: {
      files: [ 'src/library/scss/main.scss' ],
      tasks: [ 'jshint', 'sass' ]
    }
  } );

  require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

  grunt.registerTask( 'default', [ 'sass' ] );

};
