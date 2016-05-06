var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');

gulp.task("post", function() {
	gulp.src("./src/styles/post/post.sass")
	  .pipe(sass().on("error", sass.logError))
	  .pipe(autoprefixer({
	  	browsers: ["last 2 versions"],
	  	cascade: false
	  }))
	  .pipe(gulp.dest("./../app/assets/stylesstyles"));
});

gulp.task("sidewide", function() {
	gulp.src("./src/styles/sitewide/main.sass")
	  .pipe(sass().on("error", sass.logError))
	  .pipe(autoprefixer({
	  	browsers: ["last 2 versions"],
	  	cascade: false
	  }))
	  .pipe(gulp.dest("../app/assets/stylesstyles"))
});

gulp.task("dashboard", function() {
	gulp.src("./src/styles/dashboard/dashboard.sass")
	  .pipe(sass().on("error", sass.logError))
	  .pipe(autoprefixer({
	  	browsers: ["last 2 versions"],
	  	cascade: false
	  }))
	  .pipe(gulp.dest("../app/assets/stylesstyles"))
});

gulp.task("css", ["dashboard", "post", "sidewide"])
