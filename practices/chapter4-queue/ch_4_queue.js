class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(data) { // add data to queue
    this.queue.unshift(data) // from start
    return this
  }

  dequeue() { // read data from queue
    if(this.size()) {
      return this.queue.pop() // from end
    }
    return 'this queue is empty now.'
  }

  size() {
    return this.queue.length
  }
}

function enqueueSample() {
  const queue = new Queue()
  const size = queue.enqueue('a').enqueue('b').enqueue('c').size()
  console.log(size)
}

function dequeueSample() {
  const queue = new Queue()
  queue.enqueue('a').enqueue('b').enqueue('c')
  while (queue.size()) {
    console.log(queue.dequeue())
  }
}

enqueueSample()
dequeueSample()