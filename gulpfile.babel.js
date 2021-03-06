import babel from 'gulp-babel';
import gulp from 'gulp';
import ractive from 'gulp-ractive';
import rename from 'gulp-rename';
import rollup from 'gulp-rollup';
import watch from 'gulp-watch';
import wrap from 'gulp-wrap';

gulp.task('hbs', function () {
    return gulp.src('**/*.hbs')
        .pipe(ractive())
        .pipe(wrap('export default <%= contents %>;\n\n'))
        .pipe(rename({extname: '.hbs.js'}))
        .pipe(gulp.dest('./'));
});

gulp.task('build', ['hbs'], function () {
    return gulp.src('src/ux-checkbox*.js')
        .pipe(rollup({
            entry: './src/ux-checkbox.js',
            moduleName: 'uxCheckbox',
            globals: {
                Ractive: 'Ractive'
            },
            format: 'umd'
        }))
        .pipe(babel({
            "presets": ["es2015"]
        }))
        .pipe(rename({basename: 'index'}))
        .pipe(gulp.dest('.'));
});

gulp.task('default', function () {
    return watch(['**/*.hbs', 'src/ux-checkbox*.js'], function () {
       return gulp.tasks[build]();
   });
});
