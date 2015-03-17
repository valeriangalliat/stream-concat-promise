import concat from 'concat-stream'
import Promise from 'promise'

export default (stream, opts) =>
  new Promise((resolve, reject) => {
    stream.on('error', reject)
    stream.pipe(concat(opts, resolve))
  })
