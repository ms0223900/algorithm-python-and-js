class Queue():
  def __init__(self):
    self.queue = []

  def enqueue(self, data): # 插入資料
    self.queue.insert(0, data)
    return self

  def dequeue(self): # 讀取資料(讀完拔除)
    if self.size():
      return self.queue.pop()
    return "it's empty queue."

  def size(self):
    return len(self.queue)

def enqueue_sample():
  queue = Queue()
  queue.enqueue(1).enqueue(2).enqueue(3)
  print('lenght of queue is: ', queue.size())

def dequeue_sample():
  queue = Queue()
  queue.enqueue(1).enqueue(2).enqueue(3)
  while queue.size() > 0:
    print('read queue: ', queue.dequeue())

if __name__ == "__main__":
    enqueue_sample()
    dequeue_sample()