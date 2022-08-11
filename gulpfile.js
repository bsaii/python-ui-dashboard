const { series, parallel, watch } = require('gulp');
const { exec } = require('node:child_process');
const browserSync = require('browser-sync').create();

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

function _watch() {
  // watch for changes in the files and reload the browser
  watch('dashboard/templates/**/*.html', { queue: false }, function (cb) {
    browserSync.reload();
    cb();
  });
  watch('dashboard/static/**/*.css', { queue: false }, function (cb) {
    browserSync.reload();
    cb();
  });
  watch('dashboard/static/**/*.js', { queue: false }, function (cb) {
    browserSync.reload();
    cb();
  });
}

exports.default = parallel(_browserSync, _watch, series(runserver));
