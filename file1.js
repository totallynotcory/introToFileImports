// ./ represents the same file/directory
const file2 = require('./file2')
const math = require('./extras/math')
const moviesFile = require('./movies')

file2.sayHello()
file2.flatter()
file2.sayGoodbye('Devan')
console.log(file2.name)
file2.askHowAreYou()

console.log(math.multiplyByTwo(4))

moviesFile.movies.forEach(movie => {
  console.log(movie.title)
})

const calculatorFactory = require('./calc')
const calculator = calculatorFactory()

console.log(calculator.add(3, 4))
console.log(calculator.divide(100, 10))
