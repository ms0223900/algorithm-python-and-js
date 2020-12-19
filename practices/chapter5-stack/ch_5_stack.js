class Stack {
  constructor() {
    this.stack = []
  }

  stackPush(data) {
    this.stack.push(data) // from end
    return this
  }

  get() {
    if(this.isEmpty()) {
      return undefined
    }
    return this.stack[this.stack.length - 1]
  }

  stackPop() {
    return this.stack.pop() // get from end
  }

  size() {
    return this.stack.length
  }

  isEmpty() {
    return this.size() === 0
  }
}

const stack = new Stack()
const arr = [1, 10, 100]

function main() {
  for (const data of arr) {
    stack.stackPush(data)
  }
  for (const i of Array(3)) {
    console.log(stack.get())
  }
  while(!stack.isEmpty()) {
    console.log(stack.stackPop())
  }
}

main()
