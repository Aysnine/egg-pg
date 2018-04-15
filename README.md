# egg-pg
<!-- 
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-pg.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@cnine/egg-pg
[travis-image]: https://img.shields.io/travis/eggjs/egg-pg.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-pg
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-pg.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-pg?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-pg.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-pg
[snyk-image]: https://snyk.io/test/npm/egg-pg/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-pg
[download-image]: https://img.shields.io/npm/dm/@cnine/egg-pg.svg?style=flat-square
[download-url]: https://npmjs.org/package/@cnine/egg-pg
 -->
<!--
Description here.
-->

## Install

```bash
$ npm i egg-pg --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.pg = {
  enable: true,
  package: 'egg-pg',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.pg = {
  // default
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  // require
  password: 'password',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
