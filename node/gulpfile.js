var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');
var smoosher = require("gulp-smoosher");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var uglify = require("gulp-uglify");
var buffer = require("vinyl-buffer");

gulp.task("sitewide:css", function() {
	gulp.src("./src/styles/sitewide/main.sass")
	  .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
	  .pipe(autoprefixer({
	  	browsers: ["last 2 versions"],
	  	cascade: false
	  }))
	  .pipe(gulp.dest("./dist/styles"))
	  //.pipe(gulp.dest("./../app/assets/stylesstyles/sitewide"));
});

gulp.task("html:css", function() {
	gulp.src('./dist/html/_styles.html.erb')
	  .pipe(smoosher())
	  .pipe(gulp.dest('./../app/views/layouts'));
});

gulp.task("styles", ["sitewide:css", "html:css"]);

gulp.task("sitewide:js", function() {
	return browserify("./src/js/sitewide/sitewide.js")
		.bundle()
		.pipe(source("sitewide.js"))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest("./dist/scripts"));
	  //.pipe(gulp.dest("./../app/assets/stylesstyles/sitewide"));
});

gulp.task("html:js", function() {
	gulp.src('./dist/html/_scripts.html.erb')
	  .pipe(smoosher())
	  .pipe(gulp.dest('./../app/views/layouts'));
});

gulp.task("js", ["sitewide:js", "html:js"]);


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

gulp.task("default", [ "dashboard", "post"]);