var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task("pint",function(){
	console.log("hellow word");
});
gulp.task("styles",function(){
    return gulp.src("sass/*.scss").pipe(sass({style:"expanded"})).pipe(gulp.dest("css"));
    });
gulp.task("watch",function(){
    gulp.watch("sass/*.scss",["styles"]);
    })