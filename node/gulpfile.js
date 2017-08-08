let gulp = require("gulp");
let sass = require("gulp-sass");
let autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');

function gulpTask(route) {
	gulp.src("./src/styles/" + route)
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer({
			browsers: ["last 2 versions"],
			cascade: false
		}))
		.pipe(cleanCSS())
		.pipe(gulp.dest("./../app/assets/stylesstyles"));
}

gulp.task("post", function() {
	gulpTask("post/post.sass");
});

gulp.task("sitewide", function() {
	gulpTask("sitewide/main.sass");
});

gulp.task("dashboard", function() {
	gulpTask("dashboard/dashboard.sass");
});

gulp.task("css", ["dashboard", "post", "sitewide"])
