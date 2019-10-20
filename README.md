# buildToolsNC

This project is made only for study purposes. In it, can be found a basic FrontEnd Build  that allow useful tools like hotreload or minify files when building production packages among others.

The project has been developed using an HTML Template system `Nunjucks`, `SASS` and `ECMA2015 JS` with `BABEL` to grant better support. 

The FrontEnd build has been elaborated with `Gulp` and some gulp plugins for minifying like `webpack-stream` to minify JS and `gulp-htmlmin` and `gulp-clean-css` to minify HTML and CSS. Another useful gulp plugins used are: 
- `gulp-rename`
- `gulp-if`
- `gulp-babel`
- `gulp-nunjucks`
- etc.

This project also counts with Continuous Integration thanks to `Travis-CI`.

This build incorporates also linting for JS(eslint) and CSS/SASS (stylelint) files 

## Scripts

#### Initial step 
```
npm install
```
> Rememeber that before running any command you must install all the packages listed in the `package.json` of the project.

#### Development build
```
npm run start
```
> `NODE_ENV` set to `development` and inits BrowserSync. Doing so you will get a work environment with hotdeploy (meaning the watchers are up looking for any changes in js, css and html files with no reloads required to see your changes) ready to start developing.

#### Production build
```
npm run build
```
>`NODE_ENV` set to `production`. This build will contain the JS, CSS and HTML files minified.

#### Next steps

- Use Parcel instead of Gulp to get the current functionalities.
