var gulp     =  require('gulp');
var stylus   = 	require('gulp-stylus');
var nib      = 	require('nib');
var rupture  = 	require('rupture');


/* ==========================================================================
   	                               STYLUS                                    
   ========================================================================== */

gulp.task('styles', function(){
	gulp.src('stylus/style.styl')
	.pipe(stylus({
		compress: false,
		use: [nib(), rupture()]
	}))
	.pipe(gulp.dest('./css/'));
})

/* ==========================================================================
   	                               WATCH                                   
   ========================================================================== */

gulp.task('watch', function(){
	gulp.watch('stylus/*.styl', ['styles']);
});