var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');
var smoosher = require("gulp-smoosher");

// ------------------------------------ SITEWIDE TASKS
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

gulp.task("sitewide:html", function() {
	gulp.src('./dist/html/_sitewide.html.erb')
	  .pipe(smoosher())
	  .pipe(gulp.dest('./../app/views/assets'));
});

gulp.task("sidewide:pro", ["sitewide:css", "sitewide:html"]);

// ------------------------------------ POST TASKS
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

gulp.task("post:js", function() {
	gulp.src('./dist/html/_post_script.html.erb')
	  .pipe(smoosher())
	  .pipe(gulp.dest('./../app/views/assets'));
});

gulp.task("post:html", function() {
	gulp.src('./dist/html/_post_style.html.erb')
	  .pipe(smoosher())
	  .pipe(gulp.dest('./../app/views/assets'));
});

gulp.task("post:pro", ["post:css", "post:html", "post:js"])

// // ------------------------------------ dashboard TASKS
// // ------------------------------------
// // ------------------------------------

gulp.task("dashboard:css", function() {
	gulp.src("./src/styles/dashboard/dashboard.sass")
	  .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
	  .pipe(autoprefixer({
	  	browsers: ["last 2 versions"],
	  	cascade: false
	  }))
	  .pipe(gulp.dest("./dist/styles"));
});

gulp.task("dashboard:js", function() {
	gulp.src('./dist/html/_dashboard_script.html.erb')
	  .pipe(smoosher())
	  .pipe(gulp.dest('./../app/views/assets'));
});

gulp.task("dashboard:html", function() {
	gulp.src('./dist/html/_dashboard_style.html.erb')
	  .pipe(smoosher())
	  .pipe(gulp.dest('./../app/views/assets'));
});

gulp.task("dashboard:pro", ["dashboard:css", "dashboard:js", "dashboard:html"]);

gulp.task("production", ["dashboard:pro", "post:pro", "sidewide:pro"])
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////DEV
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

gulp.task("post:dev", function() {
	gulp.src("./src/styles/post/post.sass")
	  .pipe(sass().on("error", sass.logError))
	  .pipe(autoprefixer({
	  	browsers: ["last 2 versions"],
	  	cascade: false
	  }))
	  .pipe(gulp.dest("./../app/assets/stylesstyles/dev"));
});

gulp.task("sidewide:dev", function() {
	gulp.src("./src/styles/sitewide/main.sass")
	  .pipe(sass().on("error", sass.logError))
	  .pipe(autoprefixer({
	  	browsers: ["last 2 versions"],
	  	cascade: false
	  }))
	  .pipe(gulp.dest("../app/assets/stylesstyles/dev"))
});

gulp.task("dashboard:dev", function() {
	gulp.src("./src/styles/dashboard/dashboard.sass")
	  .pipe(sass().on("error", sass.logError))
	  .pipe(autoprefixer({
	  	browsers: ["last 2 versions"],
	  	cascade: false
	  }))
	  .pipe(gulp.dest("../app/assets/stylesstyles/dev"))
});

gulp.task("dev", ["dashboard:dev", "post:dev", "sidewide:dev"])