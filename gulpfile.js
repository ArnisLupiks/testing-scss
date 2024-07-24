const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");


function compileSass() {
    return src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
          }))
        .pipe(dest('dist/css'));
}

function watchFiles() {
    watch(['scss/**/*.scss'], compileSass);
}

exports.default = series(compileSass, watchFiles);