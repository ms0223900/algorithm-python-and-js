from queue import Queue

myQueue = Queue()
for i in range(4):
  myQueue.put(i + 10)

while not myQueue.empty():
  print(myQueue.get())