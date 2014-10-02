emberjs-experiment
==================

This is an experimental project and here I recreate the [TodoMVC](http://www.cubicleapps.com/articles/todo-mvc-with-ember-cli-part-1) to demonstrate the possibility to ease Ember development and production workflow with [SystemJS](https://github.com/systemjs/systemjs) and [jspm](http://jspm.io).

How to get started
---

* Install **jspm** via npm:

`npm install -g jspm`

* Install vendor packages via jspm at the same location as `config.js`:

`jspm install`

* Install express server via npm

`npm install`

* Launch

`node server.js` or `npm start`

More Information
---

Here is some notes you might find useful:

* Traditionally, Ember uses a custom [AMD loader](https://github.com/stefanpenner/loader.js) to load and resolve modules during runtime, but this requires the code to be in AMD syntax. SystemJS could be considered a replacement for such loader, and it is more powerful and could load any module format(ES6, AMD, CommonJS and global). So you can write code in ES6 format with no need for compilation during development.

* This setup does not require any build tool. Handlebars template could be loaded by SystemJS during runtime with the help of a simple plugin I wrote in `hbs.js` ([this](https://github.com/systemjs/systemjs#plugins) will explain how to use SystemJS plugins). If you need to use SCSS/SASS, simply use the `sass --watch` or the file watcher feature in Webstorm.

For information on **SystemJS**, visit [github.com/systemjs/systemjs](https://github.com/systemjs/systemjs)

For information on **jspm**, visit [jspm.io](http://jspm.io/)


