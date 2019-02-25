class Obj {
  constructor(name) {
    this.name = name
  }
  sayHello() {
    console.log(this.name)
  }

  render() {
    return console.log('this.name', this.name)
  }
}

const person = new Obj('xiaoli')
person.sayHello()
person.render()

function foo () {
  console.log('Simple function call')
  console.log(this)
}

// prints true on console
foo()
console.log(this) // Prints true on console.
