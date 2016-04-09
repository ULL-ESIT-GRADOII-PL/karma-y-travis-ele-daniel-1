// Karma configuration
// Generated on Wed Mar 30 2016 18:40:05 GMT+0100 (WEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: [
            'karma-mocha',
            'karma-firefox-launcher',
            'karma-coverage',
            //'karma-chrome-launcher',
            'karma-sourcemap-loader',
            'karma-chai',
            //'karma-html2js-preprocessor',
            'karma-webpack'
        ],
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],
    /*
    client: {
          mocha: {
            reporter: 'html',
            ui: 'bdd'
          }
    },
    */
    files: [
      'test/test.js',
    ],

    reporters: [
        'progress',
        'coverage'
    ],

    coverageReporter: {
        dir: 'build/reports/coverage',
        reporters: [
            {
                type: 'html',
                subdir: 'report-html'
            },
            {
                type: 'lcov',
                subdir: 'report-lcov'
            },
            {
                type: 'cobertura',
                subdir: '.',
                file: 'cobertura.txt'
            }
        ]
    },

    webpack: {
        module: {
            postLoaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|resources\/js\/vendor)/,
                    loader: 'istanbul-instrumenter'
                }
            ]
        }
    },
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/test.js': ['webpack', 'sourcemap'],
      //'index.html': ['html2js']
    },

    webpackMiddleware: {
        noInfo: true
    },
    /*
    // list of files / patterns to load in the browser
    files: [
      //'test/test.js',
      // 'vendor/vendor.bundle.js',
      // 'vendor/test.js',
      'test/index.html',
      {pattern: 'vendor/vendor.bundle.js', included: true, served: true},
      {pattern: 'vendor/test.js', included: true}
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      //'test/test.js': ['webpack', 'sourcemap'],
      'index.html': ['html2js']
    },

    webpack: {
        // karma watches the test entry points
        // (you don't need to specify the entry option)
        // webpack watches dependencies
        devtool: 'inline-source-map'
        // webpack configuration
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],
    */

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'], // , 'Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
