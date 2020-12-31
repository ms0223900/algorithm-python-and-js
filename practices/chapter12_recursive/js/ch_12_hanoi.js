function hanoi(n, source, aux, target) {
  if(n === 1) {
    console.log(`Move ${n} from ${source} to ${target}`)
  } else {
    // 把最小的放到輔助，就等同少一個n的解法(因為可以將輔助視為沒東西)，去解n - 1的河內塔
    hanoi(n - 1, source, target, aux)
    console.log(`Move ${n} from ${source} to ${target}`)
    // 最後再把輔助的放到目標
    hanoi(n - 1, aux, source, target)
  }
}

function main() {
  hanoi(4, 'A', 'B', 'C')
}

main()