from basic_node import Node
from basic_node import printNodes 

n1 = Node('a')
n2 = Node('b')
n3 = Node('c')

n1.next = n2
n2.next = n3

if(__name__ == '__main__'): # 只有此檔案才會被呼叫
  printNodes(n1)

