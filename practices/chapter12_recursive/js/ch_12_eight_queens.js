class EightQueens {
  constructor(tableSize=0) {
    this.tableSize = tableSize
    this.queensPositions = [...Array(tableSize)].map(() => -1) 
    // 一個row只會有一個queen, 因此index, value等同(row, col)
    this.solve(0)
  }

  checkQueensCanBePut(row, col) {
    for (let i = 1; i < row + 1; i++) {
      if(this.queensPositions[row - i] === col ||
         this.queensPositions[row - i] === col - i ||
         this.queensPositions[row - i] === col + i 
        ) {
          return false
        }
    }
    return true
  }

  print() {
    let res = ''
    for (let row = 0; row < this.tableSize; row++) {
      for (let col = 0; col < this.tableSize; col++) {
        if(this.queensPositions[row] === col) {
          res += 'Q'
        } else {
          res += '□'
        }
      }
      res += '\n'
    }
    console.log(res)
  }

  solve(row=0) {
    if (row === this.tableSize) {
      return true
    }
    // console.log(this.queensPositions)

    for (let col = 0; col < this.tableSize; col++) {
      this.queensPositions[row] = col
      if(this.checkQueensCanBePut(row, col) && this.solve(row + 1)) {
        return true
      }
    }

    return false
  }
}

function main() {
  const solvedQueens = new EightQueens(8)
  solvedQueens.print()
}

main()