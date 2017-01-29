var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	concatcss = require('gulp-concat-css'),
	uglify = require('gulp-uglify'),
	uglifycss = require('gulp-uglifycss');

//analisuglifyar o codigo js
gulp.task('jshint',function(){
	return gulp.src('js/**/*.js') // "return" faz com que rode de maneira assincrona
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

//concatenar e minificar o codigo js em um unico arquivo
gulp.task('uglify',function(){
	return gulp.src(['lib/**/*.js', 'js/**/*.js']) 
				.pipe(uglify())
				.pipe(concat('all.min.js'))
				.pipe(gulp.dest('dist/js'));
});

//concatenar e minificar o codigo css em um unico arquivo
gulp.task('uglifycss',function(){
	return gulp.src('css/**/*.css') 
				.pipe(uglifycss())
				.pipe(concatcss('all.min.css'))
				.pipe(gulp.dest('dist/css'));
});

//otimizar imagem
gulp.task('otimiza-img',function () {
	return gulp.src('img/**/*') //diretorio de origem das imagens
				.pipe(imagemin()) //modulo que faz otimizacao de imagem
				.pipe(gulp.dest('img')); //diretorio de destino das imagens (neste caso o mesmo diretorio)
});

//ordem de execucao
gulp.task('default',['jshint','uglify','uglifycss','otimiza-img']);