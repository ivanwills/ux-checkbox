import gulp from 'gulp';
import ractive from 'gulp-ractive';
import rename from 'gulp-rename';
import wrap from 'gulp-wrap';
import rollup from 'gulp-rollup';
import babel from 'gulp-babel';

gulp.task('hbs', function () {
    return gulp.src('**/*.hbs')
        .pipe(ractive())
        .pipe(wrap('export default <%= contents %>;\n\n'))
        .pipe(rename({extname: '.hbs.js'}))
        .pipe(gulp.dest('./'));
});

gulp.task('bundle', ['hbs'], function () {
    return gulp.src('ux-checkbox*.js')
        .pipe(rollup({
            entry: './ux-checkbox.js',
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
