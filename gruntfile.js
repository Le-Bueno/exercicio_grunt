module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/main.css': 'src/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'dist/main.min.css': 'src/main.less'
                }
            }
        },
        uglify : { 
            my_target : { 
              files : { 
                'dev/main.min.js' : ['src/main.js'] 
              } 
            } 
          } 
    })
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task(s).
    grunt.registerTask('default', ['less', 'uglify']);
  
  };