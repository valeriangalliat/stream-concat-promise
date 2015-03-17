import concat from 'concat-stream'
import Promise from 'promise'

const merge = (dest, src) => {
  for (let name in src) dest[name] = src[name]
  return dest
}

const defer = () => {
  const deferred = {}

  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve
    deferred.reject = reject
  })

  return deferred
}

export default opts => {
  const { promise, resolve } = defer()
  return merge(promise, concat(opts, resolve))
}
