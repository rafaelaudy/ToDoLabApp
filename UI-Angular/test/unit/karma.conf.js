module.exports = function(config) {
  config.set({
    basePath: '../..',
    files: [
            'app/vendors/angular/angular.min.js',
            'app/vendors/angular-route/angular-route.min.js',
            'app/app.js',
            'app/common/**/*.js',
            'app/domain/**/*.js',
            'test/unit/**/*Spec.js'
        ],
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    autoWatch: false,
    singleRun: true
  });
};
