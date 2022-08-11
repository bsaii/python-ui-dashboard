const { series, parallel, watch, src, dest } = require('gulp');
const { exec } = require('node:child_process');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

// 1. Task to run `py.manage.py runserver`
// 2. Task to sync with the browser
// 3. Task to watch for changes in the files

function runserver(cb) {
  exec('py manage.py runserver', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error - py manage.py runserver: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
  cb();
}

function _browserSync(cb) {
  browserSync.init({
    notify: false,
    port: 8000,
    proxy: 'localhost:8000',
  });
  cb();
}

function buildStyles() {
  return src('dashboard/static/dashboard/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(dest('dashboard/static/dashboard/css'))
    .pipe(browserSync.stream());
}

function _watch() {
  // watch for changes in the files and reload the browser
  watch('dashboard/templates/**/*.html', { queue: false }, function (cb) {
    browserSync.reload();
    cb();
  });
  watch(
    'dashboard/static/dashboard/scss/**/*.scss',
    { queue: false },
    function (cb) {
      buildStyles();
      cb();
    }
  );
  watch(
    'dashboard/static/dashboard/js/**/*.js',
    { queue: false },
    function (cb) {
      browserSync.reload();
      cb();
    }
  );
}

exports.default = parallel(_browserSync, _watch, series(runserver));
