

module.exports.register = function(gulp, config) {
    gulp.task('scss:compile', function() {
        var scss = require('gulp-sass'),
            neat = require('node-neat').includePaths;

        return gulp.src(config.paths.scss.main)
            .pipe(scss({
                includePaths: neat,
                errLogToConsole: true,
                sourceMapEmbed: true,
                sourceMap: true,
                outputStyle: 'compressed'
            }))
            .pipe(gulp.dest(config.dest + '/styles'));
    });
};
