const {
  rl,
} = require('../../lib/cmdReadline')

function basicFibonacci(n) {
  if(n === 0) {
    return 0
  }
  if(n === 1) {
    return 1
  }
  return basicFibonacci(n - 2) + basicFibonacci(n - 1)
}

function memoFibonacci(n) {
  let res = [0, 1] // 等同basic的n為0 or 1的情況
  
  function innerFibo(i) {
    if(typeof res[i] !== 'number') {
      res[i] = innerFibo(i - 2) + innerFibo(i - 1)
    }
    return res[i]
  }

  return innerFibo(n)
}

function main() {
  rl.question('Input n: ', ans => {
    const n = Number(ans)

    console.log('Fibonacci(n) = ')
    console.log(basicFibonacci(n))
    console.log(memoFibonacci(n))
    
    rl.close()
  })
}

main()
