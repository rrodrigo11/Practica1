let gulp = require('gulp');
let sass = require('gulp-sass');
let typescript = require('gulp-typescript');
let webserver = require('gulp-webserver');


gulp.task('html',function(){
    return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch:html', gulp.series('html', function (done) {
    gulp.watch('src/**/*.html', gulp.series('html'));
    done();
}));

gulp.task('scripts',function(){
    tsConfig = typescript.createProject('tsconfig.json');
    return tsConfig.src()
    .pipe(tsConfig())
    .pipe(gulp.dest('dist/assets/scripts'));
});

gulp.task('watch:scripts', gulp.series('scripts', function (done) {
    gulp.watch('src/**/*.js', gulp.series('scripts'));
    done();
}));

gulp.task('styles',function(){ //ejemplo de rutina para creacion de archivo css a traves de la herrramienta de gulp-sass
    return gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/'));
});

gulp.task('watch:styles', gulp.series('styles', function (done) {
    gulp.watch('src/**/*.scss', gulp.series('styles'));
    done();
}));

gulp.task('serve', function () {
    return gulp.src('dist')
        .pipe(webserver({
            open: true,
            livereload: true
        }));
});

gulp.task('default', gulp.parallel(['watch:styles','watch:html', 'watch:scripts', 'serve']));
