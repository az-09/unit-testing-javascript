const operations = require('./operations')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log(`
Calc.js

Welcome to the Node.js Calculator app!
Version: 1.0.0.

Usage: The user will be prompted for two numbers,
then asked to select their operation of choice.
`)


rl.question('Enter the first number: ', x =>{
    rl.question('Enter the second number: ', y =>{
        rl.question(
            `
            Please select from the following options:

            [1] Addition (+)
            [2] Subtraction (-)
            [3] Multiplicaiton (*)
            [4] Division (/)

            Enter your choice:`, choice => {
                if(!operations.validateNumber(x, y)){
                    console.log('Only numbers are allowed! Please restart the program.')
                } else {
                    switch(choice) {
                        case '1':
                            console.log(`The sum of ${x} and ${y} is ${operations.add(x, y)}`)
                            break
                        case '2':
                            console.log(`The subtraction of ${x} and ${y} is ${operations.subtract(x, y)}`)
                            break
                        case '3':
                            console.log(`The multiplication of ${x} and ${y} is ${operations.multiply(x, y)}`)
                            break
                        case '4':
                            console.log(`The division of ${x} and ${y} is ${operations.divide(x, y)}`)
                            break
                        default:
                            console.log('Please restart the program and select a number between 1 and 4')
                            break
                    }
                }
                rl.close()
            }

        )
    })
})

