module.exports = function (grunt) {
    grunt.initConfig({
        'http-server': {
            dev: {
                root: 'app',
                openBrowser: true
            },
            test: {
                root: 'app',
                runInBackground: true
            }
        },

        exec: {
            webDriverUpdate: 'webdriver-manager update',
            runFunctionalTests: 'protractor test/functional/protractor.conf.js'
        }
    });

    grunt.registerTask('start', ['http-server:dev']);
    grunt.registerTask('test', ['http-server:test', 'exec:webDriverUpdate', 'exec:runFunctionalTests']);

    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-exec');
};