# stream-concat-promise [![npm version](http://img.shields.io/npm/v/stream-concat-promise.svg?style=flat-square)](https://www.npmjs.org/package/stream-concat-promise)

> Promise version of [concat-stream].

[concat-stream]: https://github.com/maxogden/concat-stream

Description
-----------

A bit like [concat-stream-promise] but actually uses concat-stream
internally, so you can use its regular options and behavior.

[concat-stream-promise]: https://github.com/rschaosid/concat-stream-promise

Usage
-----

### Standard

```js
/**
 * @param {Stream} stream The stream to concatenate.
 * @param {Object} [opts] concat-stream options.
 * @return {Promise}
 */
import concat from 'stream-concat-promise'

concat(process.stdin)
  .then(console.log)
```

### Mixed stream/promise

This is a version to mimic concat-stream-promise API. It can't pass the
stream errors to the promise, so you're still required to do stream
error handling.

```js
/**
 * @param {Object} [opts] concat-stream options.
 * @return {Stromise} Both a stream and a promise.
 */
import concat from 'stream-concat-promise/mixed'

process.stdin
  .pipe(concat())
  .then(console.log)
```
