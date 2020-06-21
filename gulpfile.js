'use strict';

const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat      = require('gulp-concat');

function browsersync() {
  browserSync.init({
    server: {baseDir: 'template/src/'},
    notify: false,
    online: true // ! без подключения к интернету поставить false
  })
}

function scripts() {
  return src([
    'template/src/js/script.js',
  ])
    .pipe(concat('script.min.js'))
    .pipe(dest('template/src/js'))
}

exports.browsersync = browsersync;
exports.scripts     = scripts;
