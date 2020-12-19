from basic_node import Basic_linked_list
from basic_node import Node

class Remove_node_linked_list(Basic_linked_list):
  def remove_node(self, node_data):
    if self.head == None:
      return
    
    point = self.head
    while(point):
      if point.data == node_data:
        break
      prev = point
      point = point.next
    
    if point == None:
      return
    
    prev.next = point.next # 上一個直接跳過符合的node，指向下一個

def main():
  linked_list = Remove_node_linked_list()
  linked_list.ending_insert(1).ending_insert(10).ending_insert(20)
  print('origin linked list: ')
  linked_list.print_list()

  print('removed linked list: ')
  linked_list.remove_node(10)
  linked_list.print_list()

if __name__ == "__main__":
    main()