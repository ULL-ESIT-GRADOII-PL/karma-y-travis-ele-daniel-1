var gulp = require('gulp');
// watch permite tener tareas ejecuntdose en segundo plano cuando ocurre un
// determinado evento como guardar un archivo.
var watch = require('gulp-watch');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
// Permite añadir determinadas carpetas a una determinada rama, es bastante util
// para actualizar el gh-pages
var ghPages = require('gulp-gh-pages');
// webpack permite organizar las dependencias de la aplicacion aplicarle minified
// y generar los map, para la recuperacion del documento original, para debuggear
var webpack = require('webpack-stream');
// Para vaciar la carpeta vendor de toda la *** generada, tenemos un comando para
// enviarla muy lejos
var clean = require('gulp-clean');


var src = 'src';
var vendor = 'vendor/';
var paths = {
  html: '*.html',
  css: src + '/css/*.css',
  js: src + '/js/*.js'
};


gulp.task('minify-css', function() {
  return gulp.src(paths.css)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(vendor));
});

gulp.task('minify-html', function() {
  return gulp.src(paths.html)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(vendor));
});

gulp.task('webpack', function() {
  return gulp.src(paths.js)
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(vendor));
});

gulp.task('generate-pages', function() {
  return gulp.src('./vendor/*')
    .pipe(ghPages());
});

gulp.task('clean', function () {
	return gulp.src(vendor, {read: false})
		.pipe(clean());
});

gulp.task('watch', function () {
  gulp.watch(paths.css, ['minify-css']);
  gulp.watch(paths.html, ['minify-html']);
  gulp.watch(paths.js, ['webpack']);
});

// Por defecto, limpiamos y rehacemos todo de nuevo
gulp.task('default', ['clean', 'minify-css', 'minify-html', 'webpack']);
