var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');
var smoosher = require("gulp-smoosher");

gulp.task("sitewide", function() {
	gulp.src("./src/styles/sitewide/main.sass")
	  .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
	  .pipe(autoprefixer({
	  	browsers: ["last 2 versions"],
	  	cascade: false
	  }))
	  .pipe(gulp.dest("./../app/assets/stylesstyles/sitewide"));
});

gulp.task("dashboard", function() {
	gulp.src("./src/styles/dashboard/dashboard.sass")
	  .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
	  .pipe(autoprefixer({
	  	browsers: ["last 2 versions"],
	  	cascade: false
	  }))
	  .pipe(gulp.dest("./../app/assets/stylesstyles/dashboard"));
});

gulp.task("post", function() {
	gulp.src("./src/styles/post/post.sass")
	  .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
	  .pipe(autoprefixer({
	  	browsers: ["last 2 versions"],
	  	cascade: false
	  }))
	  .pipe(gulp.dest("./../app/assets/stylesstyles/post"));
});

gulp.task("html", function() {
	gulp.src('./../app/views/layouts/application.html.erb')
	  .pipe(smoosher())
	  .pipe(gulp.dest('./../app/views/layouts'));
});




gulp.task("default", ["sitewide", "dashboard", "post"]);