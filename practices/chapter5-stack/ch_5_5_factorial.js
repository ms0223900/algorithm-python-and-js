const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

class Factorial {
  constructor(n=1) {
    this.fact = 0
    this.getFactorial(n)
  }

  printFactBeforeCalled(n) {
    console.log(`factorial(${n})called before ${n}! = ${this.fact}`)
  }

  printFactBeforeReturned(n) {
    console.log(`factorial(${n})called returned ${n}! = ${this.fact}`)
  }

  getFactorial(n) {
    if(n === 1) {
      this.printFactBeforeCalled(n)
      console.log('Arrive at recursion endding n = 1')
      this.fact = 1
      this.printFactBeforeReturned(n)
      return this.fact
    } else {
      this.printFactBeforeCalled(n)
      this.fact = n * this.getFactorial(n - 1)
      this.printFactBeforeReturned(n)
      return this.fact
    }
  }
}

function main() {
  rl.question('Input N of factorial: ', ans => {
    const fact = new Factorial(Number(ans))
    console.log(fact.fact)
    rl.close()
  })
}

main()