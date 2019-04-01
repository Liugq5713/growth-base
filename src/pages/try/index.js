/* eslint-disable */
console.log('----')

// 写一个有错误的函数

function add() {}

// const error = new Error('我是一个错误')

try {
  setTimeout(function() {
    noSuchVariable
    throw new Error('testtest')
  }, 1000)
} catch (e) {
  alert('catch a error')
}
