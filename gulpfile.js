const gulp = require('gulp');
const inject = require('gulp-inject');
const webserver = require('gulp-webserver');
const bowerFiles = require('main-bower-files');


gulp.task('assets', function () {
    var assets = [
        'app/app.js',
        'index.js'
    ];

    return gulp.src('index.html')
        .pipe(inject(gulp.src(bowerFiles(), {
            read: false
        }), {
            name: 'bower',
            addRootSlash: false
        }))
        .pipe(inject(gulp.src(assets, {
            read: false
        }), {
            addRootSlash: false
        }))
        .pipe(gulp.dest('./'));
});
gulp.task('browser', function () {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['assets']);