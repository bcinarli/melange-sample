/**
 * @author Bilal Cinarli
 */

module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg  : grunt.file.readJSON('package.json'),
        sass : {
            dist: {
                options: {
                    style    : 'compressed',
                    sourcemap: 'auto'
                },
                files  : {
                    'assets/styles/styles.css': 'assets/styles-sass/styles.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });


    // Load the plugin that provides the "sass" task.
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['watch', 'sass']);
};