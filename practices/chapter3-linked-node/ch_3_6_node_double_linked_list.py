from basic_node import Double_node
from basic_node import printNodes

class Double_linked_list():
  def __init__(self, head=None, tail=None):
    self.head = head
    self.tail = tail

  def add_node(self, new_node):
    if isinstance(new_node, Double_node):
      if self.head == None:
        self.head = new_node
        new_node.prev = None
        new_node.next = None
        self.tail = new_node
      else:
        # node 操作
        self.tail.next = new_node # tail的node指向新node
        new_node.prev = self.tail # 新node 指向原本的尾部的node
        # list 操作
        self.tail = new_node
    return self

  def print_from_head(self):
    printNodes(self.head)

  def print_from_tail(self):
    pt = self.tail
    while pt:
      print(pt.data)
      pt = pt.prev

def main():
  double_linked_list = Double_linked_list()
  double_linked_list.add_node(Double_node(10)).add_node(Double_node(20)).add_node(Double_node(300))

  double_linked_list.print_from_head()
  double_linked_list.print_from_tail()

if __name__ == "__main__":
    main()

