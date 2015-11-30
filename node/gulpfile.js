var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');
var smoosher = require("gulp-smoosher");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var uglify = require("gulp-uglify");
var buffer = require("vinyl-buffer");

gulp.task("sitewide:css:dev", function() {
	gulp.src("./src/styles/sitewide/main.sass")
	  .pipe(sass().on("error", sass.logError))
	  .pipe(autoprefixer({
	  	browsers: ["last 2 versions"],
	  	cascade: false
	  }))
	  .pipe(gulp.dest("../app/assets/stylesstyles"))
});

// ------------------------------------ SITEWIDE TASKS STYLES
// ------------------------------------
// ------------------------------------
gulp.task("sitewide:css", function() {
	gulp.src("./src/styles/sitewide/main.sass")
	  .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
	  .pipe(autoprefixer({
	  	browsers: ["last 2 versions"],
	  	cascade: false
	  }))
	  .pipe(gulp.dest("./dist/styles"))
});

gulp.task("html:sidecss", function() {
	gulp.src('./dist/html/_styles.html.erb')
	  .pipe(smoosher())
	  .pipe(gulp.dest('./../app/views/layouts'));
});

gulp.task("side-styles", ["sitewide:css", "html:sidecss"]);

// ------------------------------------ SITEWIDE TASKS JAVASCRIPTS
// ------------------------------------
// ------------------------------------
gulp.task("sitewide:js", function() {
	return browserify("./src/js/sitewide/sitewide.js")
		.bundle()
		.pipe(source("sitewide.js"))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest("./dist/scripts"));
});

gulp.task("html:sidejs", function() {
	gulp.src('./dist/html/_scripts.html.erb')
	  .pipe(smoosher())
	  .pipe(gulp.dest('./../app/views/layouts'));
});

gulp.task("side-js", ["sitewide:js", "html:sidejs"]);

// ------------------------------------ POST TASKS STYLES
// ------------------------------------
// ------------------------------------
gulp.task("post:css", function() {
	gulp.src("./src/styles/post/post.sass")
	  .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
	  .pipe(autoprefixer({
	  	browsers: ["last 2 versions"],
	  	cascade: false
	  }))
	  .pipe(gulp.dest("./dist/styles"))
});

gulp.task("html:postcss", function() {
	gulp.src('./dist/html/_post_styles.html.erb')
	  .pipe(smoosher())
	  .pipe(gulp.dest('./../app/views/layouts_post'));
});

gulp.task("post-styles", ["post:css", "html:postcss"])

// ------------------------------------ OTRAS TASKS
// ------------------------------------
// ------------------------------------

gulp.task("post:js", function() {
	return browserify("./src/js/posts/post.js")
		.bundle()
		.pipe(source("post.js"))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest("./dist/scripts"));
});

gulp.task("html:postjs", function() {
	gulp.src('./dist/html/_post_scripts.html.erb')
	  .pipe(smoosher())
	  .pipe(gulp.dest('./../app/views/layouts_post'));
});

gulp.task("posts-js", ["post:js", "html:postjs"]);

// ------------------------------------ OTRAS TASKS
// ------------------------------------
// ------------------------------------

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