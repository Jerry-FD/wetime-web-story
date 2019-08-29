"use strict";

var gulp = require("gulp");
var postcss = require("gulp-postcss");
var cssmin = require("gulp-cssmin");
var less = require("gulp-less");
var salad = require("postcss-salad")(require("./salad.config.json"));
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var eslint = require("gulp-eslint");
var sequence = require("run-sequence");

gulp.task("cssbuild", function() {
  return gulp
    .src("./src/**/*.less")
    .pipe(less())
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest("./dist"));
});

gulp.task("tsc", function() {
  return gulp
    .src(["./src/**/*.tsx", "./src/*.tsx"])
    .pipe(tsProject())
    .pipe(gulp.dest("./dist"));
});

gulp.task("lint", function() {
  return gulp
    .src(["./src/**/*.tsx", "./src/*.tsx"])
    .pipe(eslint())
    // .pipe(eslint.failOnError());
    .pipe(eslint.failOnError())
});

gulp.task("build", function(callback) {
  sequence("lint", "tsc", "cssbuild", callback);
});

gulp.task("watch", function() {
  gulp.watch(
    ["./src/**/*.less", "./src/**/*.tsx"],
    ["cssbuild", "tsc", "lint"]
  );
});
