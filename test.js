/* eslint-disable */
console.log('----')
try {
  setTimeout(function() {
    noSuchVariable
    throw new Error('testtest')
  }, 1000)
} catch (e) {
  console.log('catch a error')
}
