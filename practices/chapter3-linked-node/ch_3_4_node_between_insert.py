from basic_node import Basic_linked_list
from basic_node import Node

class Between_insert_linked_list(Basic_linked_list):
  def insert_between(self, prev_node, data):
    if(prev_node == None):
      print('no previous node!')
      return

    new_node = Node(data)
    # 以下順序不能搞錯
    new_node.next = prev_node.next # 新插入的node的next為原本prev_node的next
    prev_node.next = new_node # prev的next就是新的node

def main():
  n1 = Node('say')
  n2 = Node('world')
  n1.next = n2

  linked_list = Between_insert_linked_list(n1)
  linked_list.insert_between(n1, 'hello')
  linked_list.print_list()

if __name__ == "__main__":
    main()