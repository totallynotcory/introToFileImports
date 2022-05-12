function sayHello () {
  console.log('Hello!')
}

function flatter () {
  console.log('Hey!  I love that scarf!')
}

function sayGoodbye (name) {
  console.log(`Goodbye ${name}!`)
}

// module.exports.sayHello = sayHello
// module.exports.flatter = flatter
// module.exports.sayGoodbye = sayGoodbye
module.exports = {
  sayHello: sayHello,
  flatter: flatter,
  sayGoodbye,
  name: 'Cory',
  askHowAreYou: () => {
    console.log('How are you?')
  }
}
