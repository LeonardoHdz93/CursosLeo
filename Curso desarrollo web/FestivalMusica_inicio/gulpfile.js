const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

// Funcion que compila SASS

function css(){
    return src('./src/scss/app.scss')
    .pipe(sass({
        outputStyle:'expanded'
    }))
    .pipe(dest('./build/css'));
}
function minimizarCSS(){
    return src('./src/scss/app.scss')
    .pipe(sass({
        outputStyle:'compressed'
    }))
    .pipe(dest('./build/css'));
}
function watchArchivos(){
    watch('./src/scss/**/*.scss', css);
}

exports.default = series(css)
exports.css = css;
exports.minimizarCSS = minimizarCSS
exports.watchArchivos = watchArchivos