require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['src/library/js/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
		sass: {
        options: {
            implementation: sass,
            sourceMap: true
        },
        dist: {
            files: {
                'build/library/css/main.css': 'src/library/scss/main.scss'
            }
        }
    },
    watch: {
      files: ['src/library/scss/main.scss'],
      tasks: ['jshint', 'sass']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);

};
