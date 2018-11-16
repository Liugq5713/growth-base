import Time from './time'

const app = document.querySelector('#app')

const time = new Time().parseTime()
app.innerHTML = time
