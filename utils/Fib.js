// 1、1、2、3、5、8、13、21、34,55,89

// function fib(n) {
//   if (n < 2) {
//     return 1
//   }
//   return fib(n - 1) + fib(n - 2)
// }

// function fib(n) {
//   if (n < 2) {
//     return 1
//   }
//   let arr = [1, 1]

//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2]
//   }
//   return arr[n]
// }

function fib(n) {
  return new Promise((resolve, reject) => {
    if (n < 2) {
      return 1
    }
    let arr = [1, 1]
    let i = 2
    setTimeout(function calc() {
      arr[i] = arr[i - 1] + arr[i - 2]
      i++
      if (i <= n) {
        setTimeout(calc, 50)
      } else {
        resolve(arr[i - 1])
      }
    }, 50)
  })
}
async function main() {
  const res = await fib(10)
  console.log('res', res)
}
main()
console.log('1000', 1000)
console.log('fib(1000)', fib(10), fib(1))
// setTimeout(() => {
//   console.log(res)
// }, 1000)
// function shardTask(fn, n) {
//   setTimeout(() => {
//     fn(n)
//   }, 4000)
// }
// console.log('shardTask(fib, 6)', shardTask(fib, 6))
// const benginTime = Date.now()
// while (1) {
//   if (Date.now() - benginTime > 1000) {
//     console.log('second runing')
//     break
//   }
// }
