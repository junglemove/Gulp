var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var clean = require('gulp-clean');
var cleanInStream = require('gulp-clean-dest');
 
gulp.task('clean',  () => {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task("copy", function () {
    return gulp.src("src/*/**")
        .pipe(cleanInStream('dist/'))
        .pipe(gulp.dest("dist/"));
});
/*
gulp.task("default", ["copy"], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts']
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("dist/js"));
});*/

gulp.task('default', ['clean', 'copy']); // do Babel transpile to es5, and browserify