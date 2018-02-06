module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
          src: 'source/sass/main.scss',
          dest: 'css/styles.css'
      }
    },
    watch: {
      scripts: {
        files: ['source/sass/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-node-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['grunt-node-sass']);
};
