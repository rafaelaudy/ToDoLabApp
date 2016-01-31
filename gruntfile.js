module.exports = function (grunt) {
    grunt.initConfig({
        'http-server': {
            'dev': {
                root: 'app',
                openBrowser: true
            }
        }
    });

    grunt.registerTask('default', ['http-server']);
    grunt.loadNpmTasks('grunt-http-server');
};

