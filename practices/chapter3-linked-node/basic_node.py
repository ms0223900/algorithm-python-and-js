class Node():
  def __init__(self, data=None):
    self.data = data
    self.next = None

class Double_node():
  def __init__(self, data=None):
    self.data = data
    self.prev = None
    self.next = None

class Basic_linked_list():
  def __init__(self, headNode=None):
    self.head = headNode

  def print_list(self):
    printNodes(self.head)

  def ending_insert(self, data):
    new_node = Node(data)

    if self.head == None:
      self.head = new_node
      return self

    point = self.head
    while(point.next): # 保留到最後一個
      point = point.next
    point.next = new_node
    return self
    

def printNodes(node): 
  point = node
  while(point):
    print(point.data)
    point = point.next

