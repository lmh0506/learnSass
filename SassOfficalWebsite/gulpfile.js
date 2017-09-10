const gulp = require('gulp');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();
const del = require('del');
const compass = require('gulp-compass');

// 定义默认任务
gulp.task('default', () => {
  // 同步执行下列任务
  return runSequence(['clean'], ['build'], ['server', 'watch']);
});

// 定义clean任务
gulp.task('clean', callback => {
  // 清除dist目录下的所有文件  dist目录存储编译完成后的文件
  return del('./dist/', callback);
})

// 定义build任务
gulp.task('build', callback => {
  // 同步执行下列任务
  return runSequence(['compass', 'staticFiles'], callback)
})

// 定义compass任务
gulp.task('compass', () => {
  return gulp.src('./src/**/*.scss') // 找到src目录下的所有scss文件
    .pipe(compass({ // 编译scss文件
      config_file: './config.rb',
      css: 'src/stylesheets',
      sass: 'src/sass'
    }))
    .on('error', function(err){
      console.log(err)
      this.emit('end')
    })
    .pipe(gulp.dest('./dist/css/')); // 最后将编译完成后的文件输出到dist下的css文件夹中
})

// 定义staticFiles任务
gulp.task('staticFiles', () => {
  return gulp.src([
    './src/**/*.html',
    './src/images*/**/*.*'
  ]) // 找到src目录下的所有静态文件
    .pipe(gulp.dest('./dist/')) // 最后将编译完成后的文件输出到dist文件夹
})

// 定义server任务
gulp.task('server', () => {
  browserSync.init({
    server: './dist',
    port: 3000
  })
})

// 定义reload任务
gulp.task('reload', () => {
  return browserSync.reload();
})

// 定义watch任务
gulp.task('watch', () => {
  // 监听html和scss文件
  return gulp.watch([
    './src/**/*.html',
    './src/**/*.scss'
  ], () => {
    return runSequence(['build'], ['reload'])
  })
})
