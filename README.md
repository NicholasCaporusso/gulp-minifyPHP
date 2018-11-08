# PHP minifier
This is just an experimental plugin for Gulp. It minifies PHP files by removing unnecessary whitespace, stripping comments, and providing some other compression

## Usage

```javascript
const gulp=require('gulp');
const minifyPHP=require('./gulp-minifyphp.js');
gulp.task('test',function(){
	return gulp.src('dev/**/*.php').pipe(minifyPHP()).pipe(gulp.dest('build'));
});
```