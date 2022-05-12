const cory = require('./cory')
const kaia = require('./kaia')

function tellUsAbout (name) {
  if (name === 'Cory') {
    console.log(
      `${cory.name} is ${cory.age} years old and ${cory.height}" tall`
    )
  } else if (name === 'Kaia') {
    console.log(
      `${kaia.name} is ${kaia.age} years old and ${kaia.height}" tall`
    )
  }
}

tellUsAbout('Kaia')

function tellUsAboutFile (file) {
  console.log(`${file.name} is ${file.age} years old and ${file.height}" tall`)
}

tellUsAboutFile(cory)

cory.aboutMe()
