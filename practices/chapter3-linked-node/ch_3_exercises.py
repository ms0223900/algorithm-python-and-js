from basic_node import Basic_linked_list
from basic_node import Node
from ch_3_6_node_double_linked_list import Double_linked_list
from ch_3_6_node_double_linked_list import Double_node

def mapFn(el):
  return 0

class Exercise_linked_list(Basic_linked_list):
  def length(self):
    pt = self.head
    length = 0
    while pt:
      pt = pt.next
      length += 1
    return length

  def print_data_amounts(self, data_list=[]):
    data_amouts = list(map(mapFn, data_list))
    pt = self.head
    while pt:
      for i, data in enumerate(data_list):
        if data == pt.data:
          data_amouts[i] += 1
      pt = pt.next
    
    for i, data in enumerate(data_list):
      print(str(data) + ' appears ' + str(data_amouts[i]) + ' times.')

    return 

linked_list = Exercise_linked_list(Node(15))
linked_list.ending_insert(5).ending_insert(10).ending_insert(5)

def print_linked_list_length():
  print("length: " + str(linked_list.length()))

def print_data_amounts():
  linked_list.print_data_amounts([5, 10, 15, 20])

def print_days():
  days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  double_linked_list = Double_linked_list()
  for day in days:
    double_linked_list.add_node(Double_node(day))
  
  double_linked_list.print_from_head()
  double_linked_list.print_from_tail()

if __name__ == "__main__":
    print_linked_list_length()
    print_data_amounts()
    print_days()