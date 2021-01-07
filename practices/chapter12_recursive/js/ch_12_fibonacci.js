const {
  rl,
} = require('../../lib/cmdReadline')

let calledTimes = 0

function basicFibonacci(n) {
  console.log(n)
  calledTimes ++
  if(n === 0) {
    console.log(`Called times: `, calledTimes)
    return 0
  }
  if(n === 1) {
    return 1
  }
  return basicFibonacci(n - 2) + basicFibonacci(n - 1)
}

function memoFibonacci(n) {
  let res = [0, 1] // 等同basic的n為0 or 1的情況
  calledTimes = 0
  calledTimes ++
  
  function innerFibo(i) {
    calledTimes ++
    if(typeof res[i] !== 'number') {
      res[i] = innerFibo(i - 2) + innerFibo(i - 1)
    }
    if(i === n) {
      console.log('Called times: ', calledTimes)
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
