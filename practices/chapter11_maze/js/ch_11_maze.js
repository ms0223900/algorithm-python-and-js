const {
  rl
} = require('../../lib/cmdReadline')

// 0 為可以走的, 1 為牆壁, 2為已走過的路徑, 3為標示不可走的
const smallMaze = [
  [1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 1],
  [1, 0, 0, 0, 1, 1],
  [1, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
]

const bigMaze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0],
  [1, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
] // [0, 1], [8, 6]

const directionFns = [
  (x, y) => [x - 1, y],
  (x, y) => [x + 1, y],
  (x, y) => [x, y - 1],
  (x, y) => [x, y + 1],
]

function solveMaze(maze=[]) {
  return (startPos, goalPos) => {
    let solvedRes = 'no-result'
    let solvedMaze = [...maze]
    let passedPathStack = []
    
    solvedMaze[startPos[0]][startPos[1]] = 2
    passedPathStack.push(startPos)

    while(passedPathStack.length > 0) {
      const currentPos = [...passedPathStack].pop()
      console.log(currentPos)
      if(currentPos[0] === goalPos[0] && currentPos[1] === goalPos[1]) {
        return ({
          solvedRes: 'solved',
          solvedMaze,
          passedPathStack,
        })
      }

      else if (!(currentPos[0] === goalPos[0] && currentPos[1] === goalPos[1])) {
        for (const directionFn of directionFns) {
          const nextPos = directionFn(currentPos[0], currentPos[1])
          // console.log(nextPos)
          const nextMazeStatus = solvedMaze[nextPos[0]][nextPos[1]]
          if(nextMazeStatus === 0) {
            passedPathStack.push(nextPos)
            solvedMaze[nextPos[0]][nextPos[1]] = 2
            break
          }
        }
      } else {
        solvedMaze[currentPos[0]][currentPos[1]] = 3
        passedPathStack.pop()
      }
    }

    return ({
      solvedRes,
      solvedMaze,
      passedPathStack,
    })
  }
}

function convertInputToArr(input_str='1,1') {
  const split_arr = input_str
    .split(',')
    .map(s => Number(s))
  return split_arr
}

function main() {
  let start = [1, 1]
  let goal = [8, 6]

  // rl.question('Input start(e.g. 1,1): ', ans => {
  //   start = convertInputToArr(ans)
  //   rl.question('Input goal(e.g. 7,7): ', ans => {
  //     goal = convertInputToArr(ans)
  //   })
  // })
  
  const solvedMazeRes = solveMaze(bigMaze)(start, goal)
  console.log(solvedMazeRes)

  rl.close()
}

main()