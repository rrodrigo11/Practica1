let gulp = require('gulp');
let sass = require('gulp-sass');
let typescript = require('gulp-typescript');

gulp.task('default', gulp.series(['styles','html', 'scripts']));

gulp.task('html',function(){
    return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts',function(){
    tsConfig = typescript.createProject('tsconfig.json');
    return tsConfig.src()
    .pipe(tsConfig())
    .pipe(gulp.dest('dist/assets/scripts'));
});

gulp.task('styles',function(){ //ejemplo de rutina para creacion de archivo css a traves de la herrramienta de gulp-sass
    return gulp.src('src/**/*.scss')
    .pipe(gulp.dest('dist'));
});