from basic_node import Node
from basic_node import printNodes

class Node_List():
  def __init__(self, headNode=None):
    self.head = headNode

  def print_list(self):
    printNodes(self.head)

  def insert_heading(self, newData):
    newNode = Node(newData)
    newNode.next = self.head
    # 把原本資料的頭接到新開頭的next, 
    # e.g. 1 -> 2 -> 3 >> 新增一個0 >> 0 -> 1... 
    self.head = newNode

if(__name__ == '__main__'):
  n1 = Node(10)
  n2 = Node(20)
  n1.next = n2

  linked_list = Node_List(n1)
  linked_list.insert_heading(30)
  linked_list.print_list()