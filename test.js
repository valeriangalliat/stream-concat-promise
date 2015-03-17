import { equal } from 'assert'
import { Readable } from 'stream'
import concat from './'
import concatMixed from './mixed'

const err = err =>
  setTimeout(() => { throw err })

const stream = () => {
  const s = new Readable()
  s._read = () => {}
  return s
}

const s1 = stream()

concat(s1)
  .then(data => equal(data, 'foo bar'))
  .then(null, err)

s1.push('foo ')
s1.push('bar')
s1.push(null)

const s2 = stream()

s2
  .pipe(concatMixed())
  .then(data => equal(data, 'foo bar'))
  .then(null, err)

s2.push('foo ')
s2.push('bar')
s2.push(null)
