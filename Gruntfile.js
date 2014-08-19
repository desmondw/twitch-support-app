module.exports = function(grunt) {
 
  grunt.initConfig({
    compass: {
      dev: {
        options: {
          sassDir: 'public/css',
          cssDir: 'public/css'
        }
      }
    },
    autoprefixer: {
      dev: {
        expand: true,
        flatten: true,
        src: 'public/css/*.css',
        dest: 'public/css/'
      }
    },
    watch: {
      dev: {
        files: ['public/css/*.scss', 'public/js/*.js', 'app/views/*'],
        tasks: ['compass', 'autoprefixer'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['watch']);
 
};
