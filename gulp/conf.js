exports.params = {
    sourceDir: 'src/app',
    targetDir: 'dist',
    indexPage: 'src/index.html',
    cleanFiles: ['dist', 'src/app/cache'],
    jshintFiles: ['app.js', 'src/app/**/*.js', 'e2e-tests/**/*.js', '!src/app/cache/*.js'],
    copyHtml: 'src/app/**/*.html',
    copyAssets: ['src/assets/{images,fonts}/**/*.*', 'node_modules/bdf-charte-angular/dist/{images,fonts}/**/*.*'],
    minifyHtml: ['dist/**/*.html', '!dist/layout/notification.tpl.html', '!dist/layout/header.login.tpl.html'],
    minifyJson: ['dist/**/*.json'],
    copyLanguages: ['src/app/languages/*.json', 'src/app/modules/**/languages/*.json'],
    injectJs: [
        'src/app/app.js',
        'src/app/app.module.js',
        'src/app/app.{ngConstants,config,route,run}.js',
        'src/app/**/*.module.js',
        'src/app/**/*.{route,config,service,provider,controller,component,directive,filter}.js',
        '!src/app/**/*.spec.js'
    ],
    warName: ''
};