from basic_node import Basic_linked_list
from basic_node import Node

class Tail_Node_List(Basic_linked_list): # 繼承Basic_linked_list
  def insert_tail(self, data):
    new_node = Node(data)
    if(self.head == None):
      self.head = new_node
      return
    
    point = self.head
    while(point.next):
      point = point.next
    point.next = new_node # 找到最後一個node

def main():
  n1 = Node('say')
  n2 = Node('hello')
  n1.next = n2

  linked_list = Tail_Node_List(n1)
  linked_list.insert_tail('world')
  linked_list.print_list()

if __name__ == "__main__": 
    main()