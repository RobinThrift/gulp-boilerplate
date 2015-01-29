var gulp = require('gulp'),
    requireDir = require('require-dir'),
    tasks = requireDir('./tasks'),
    forEach = require('lodash.foreach'),

    config = {
        pwd: __dirname,
        paths: {
            scss: {
                main: 'path/to/main.scss',
                watch: ['glob/to/watch/for/changes']
            }
        },
        dest: './build'
    };

forEach(tasks, function(task) {
    task.register(gulp, config);
});


gulp.task('default', ['scss:compile']);
