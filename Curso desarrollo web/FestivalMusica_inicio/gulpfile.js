const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');


const paths = {
    imagenes:'src/img/**/*',
    scss:'./src/scss/**/*.scss',
    js:'src/js**/*.js'
}
// Funcion que compila SASS

function css(){
    return src(paths.scss)
    .pipe(sass({
        outputStyle:'expanded'
    }))
    .pipe(dest('./build/css'));
}
function minimizarCSS(){
    return src(paths.scss)
    .pipe(sass({
        outputStyle:'compressed'
    }))
    .pipe(dest('./build/css'));
}
function javascript(){
    return src(paths.js)
    .pipe(concat('bundle.js'))
    .pipe(dest('./build/js'));
}
function imagenes(){
    return src(paths.imagenes)
    .pipe(imagemin())
    .pipe(dest('./build/img'))
    .pipe( notify({message:'ImagenMinificada'}) );
}
function versionwebP(){
    return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest('./build/img'))
    .pipe(notify({message:'Version webP lista'}));
}
function watchArchivos(){
    watch(paths.scss, css);
    watch(paths.js,javascript);
}




exports.css = css;
exports.minimizarCSS = minimizarCSS;
exports.imagenes = imagenes;
exports.versionwebP = versionwebP;
exports.watchArchivos = watchArchivos;
exports.javascript = javascript;
exports.default = series(css, imagenes,javascript,versionwebP, watchArchivos)