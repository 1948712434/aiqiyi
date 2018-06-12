var
gulp = require("gulp"),
less = require("gulp-less"),
imageMin = require("gulp-imagemin");



gulp.task('less',function(){
	gulp.src('src/less/**/*.less')
		.pipe(less())
		.pipe(gulp.dest('dist/css'));
})

gulp.task('image',function(){
	gulp.src('src/img/**/*.*')
	.pipe(imageMin({progressive:true}))
	.pipe(gulp.dest('dist/img'));
})


gulp.task('watch',function(){
	gulp.watch('src/less/**/*.less',['less']);
	gulp.watch('src/img/**/*.*',['image']);
})

gulp.task('default',['watch','less','image']);
