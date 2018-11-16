import Time from './time'

const app = document.querySelector('#app')

const time = new Time().parseTime()
console.log('time', time)

console.log('app', app)
app.innerHTML = time
