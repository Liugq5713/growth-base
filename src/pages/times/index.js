import Time from './time'
var app = document.querySelector('#app')
var time = new Time().parseTime()
app.innerHTML = time
