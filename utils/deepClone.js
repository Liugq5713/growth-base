function deepClone() {
  return true
}

function eq(a, b) {
  a.every(item => {

  })
  for (let item in a) {
    a[item] = b
  }
}

function getType(variable) {
  return Object.prototype.toString.call(variable)
}

const obj = {
  a: 1,
  b: 2
}

console.log('obj.constructor', obj.constructor)

console.log('getType(obj)', getType(obj))
console.assert(getType(obj) === '[object Object]', '相等')
eq(obj, 1)
console.assert(deepClone(obj), 'test')
