import gulp, { dest, series, src, watch } from 'gulp';
import cleanCSS from 'gulp-clean-css';
import jsonTransform from 'gulp-json-transform';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import sourceMaps from 'gulp-sourcemaps';
import uglifycss from 'gulp-uglifycss';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Set the Sass compiler
const sass = require("gulp-sass")(require("sass"));

// compiles the scss files to css and minified css files
gulp.task("compileSass", function (done) {
  return src("scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("dist"))
    .pipe(cleanCSS())
    .pipe(
      uglifycss({
        maxLineLen: 80,
        uglyComments: true,
      })
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(dest("dist"))
    .on("end", done);
});

// watches for changes in the scss files and compiles them to css when a change is detected 
gulp.task("watchFiles", function () {
  watch(["scss/**/*.scss"], series("compileSass"));
});

// changes the url of the fonts in the css file to be relative to the css file location
gulp.task("changeUrl", async function () {
  const { default: filter } = await import("gulp-filter");
  var themeComponentsFilter = filter(["dist/index.css", "dist/index.min.css"], {
    restore: true,
  });
  return src(["dist/index.css", "dist/index.min.css"])
    .pipe(themeComponentsFilter)
    .pipe(replace(/..\/assets\//g, "./assets/"))
    .pipe(themeComponentsFilter.restore)
    .pipe(sourceMaps.init())
    .pipe(
      sourceMaps.write("/", {
        sourceMappingURLPrefix: "./assets/fonts/",
      })
    )
    .pipe(dest("dist"));
});

// prepares the package.json file for distribution
gulp.task("copyPackageJson", async function () {
  return src("package.json")
    .pipe(
      jsonTransform((data) => {
        delete data.devDependencies;
        delete data.resolutions;
        delete data.config;
        delete data.files;
        delete data.scripts;
        return data;
      }, 5)
    )
    .pipe(dest("dist"));
});

// copies the assets folder to the dist folder
gulp.task("default", series("compileSass", "watchFiles"));
