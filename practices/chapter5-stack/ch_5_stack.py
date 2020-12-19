class Stack():
  def __init__(self):
    self.stack = []

  def stack_push(self, data):
    self.stack.append(data)
    return self

  def get(self):
    if self.isEmpty():
      return None
    return self.stack[self.size() - 1]

  def stack_pop(self):
    return self.stack.pop()
  
  def size(self):
    return len(self.stack)

  def isEmpty(self):
    return self.size() == 0

stack = Stack()
arr = ['a', 'b', 'c']

def stack_sample():
  for data in arr:
    stack.stack_push(data)
  while not stack.isEmpty():
    print(stack.stack_pop())

def stack_get_sample():
  print('\nstack_get_sample')
  for data in arr:
    stack.stack_push(data)
  for i in range(3):
    print(stack.get())
  while not stack.isEmpty():
    print(stack.stack_pop())


if __name__ == "__main__":
    stack_sample()
    stack_get_sample()
  