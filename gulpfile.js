let gulp = require('gulp');
let sass = require('gulp-sass');
let typescript = require('gulp-typescript');
let webserver = require('gulp-webserver');


gulp.task('html',function(){
    return gulp.src('views/index.html')
    .pipe(gulp.dest('public'));
});

gulp.task('watch:html', gulp.series('html', function (done) {
    gulp.watch('views/**/*.html', gulp.series('html'));
    done();
}));

gulp.task('scripts',function(){
    tsConfig = typescript.createProject('tsconfig.json');
    return tsConfig.src()
    .pipe(tsConfig())
    .pipe(gulp.dest('public/scripts'));
});

gulp.task('watch:scripts', gulp.series('scripts', function (done) {
    gulp.watch('views/**/*.js', gulp.series('scripts'));
    done();
}));

gulp.task('styles',function(){ //ejemplo de rutina para creacion de archivo css a traves de la herrramienta de gulp-sass
    return gulp.src('views/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/'));
});

gulp.task('watch:styles', gulp.series('styles', function (done) {
    gulp.watch('views/**/*.scss', gulp.series('styles'));
    done();
}));

gulp.task('serve', function () {
    return gulp.src('public')
        .pipe(webserver({
            open: true,
            livereload: true
        }));
});

gulp.task('default', gulp.parallel(['watch:styles','watch:html', 'watch:scripts', 'serve']));
