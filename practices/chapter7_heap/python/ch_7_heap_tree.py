class Heap_tree():
  def __init__(self):
    self.heap = []
    self.size = 0
    pass

  def get_child_left_node_index(self, index):
    return index * 2 + 1
  def get_child_right_node_index(self, index):
    return index * 2 + 2

  def get_parent_node_index(self, index):
    return (index - 1) // 2
  def get_child_node_min_index(self, index):
    # 找該節點的右邊子節點(等同node.right)
    # 如果找不到，則給該節點的左子節點
    child_left_node_index = self.get_child_left_node_index(index)
    child_right_node_index = self.get_child_right_node_index(index)

    if child_right_node_index >= self.size:
      return child_left_node_index # 左節點
      pass
    else:
      if self.heap[child_left_node_index] < self.heap[child_right_node_index]:
        return child_left_node_index
        pass
      return child_right_node_index

  def data_down_change(self, index=0):
    _index = index
    # 對調節點
    while self.get_child_right_node_index(_index) <= self.size:
      min_index = self.get_child_node_min_index(_index)
      # 如果該節點比該節點下的子節點最小還"大"
      if self.heap[_index] > self.heap[min_index]:
        # 對調
        self.heap[_index], self.heap[min_index] = self.heap[min_index], self.heap[_index]
      # 繼續往下找
      _index = min_index
    pass

  def data_up_change(self, index=0):
    _index = index
    while self.get_parent_node_index(_index) >= 0:
      parent_node_index = self.get_parent_node_index(_index)
      # 如果該節點比父節點還小
      if self.heap[_index] < self.heap[parent_node_index]:
        # 對調節點
        self.heap[_index], self.heap[parent_node_index] = self.heap[parent_node_index], self.heap[_index]
      # 繼續往上找
      _index = parent_node_index
    pass

  def create_tree(self, list):
    self.heap = list
    self.size = len(list)
    index = (len(list) // 2) - 1 # 找到塞滿子節點的那個index
    while (index >= 0):
      self.data_down_change(index)
      index = index - 1
    pass

  def get_min_node(self):
    min_node = self.heap[0]
    self.size -= 1
    self.heap[0] = self.heap[self.size] # 用最尾端的節點塞到初始
    self.heap.pop() # 把原本尾端的拿掉
    self.data_down_change(0)
    return min_node
    pass

  def append(self, data):
    self.heap.append(data) # 塞在最後
    self.size += 1
    index = self.size - 1
    while(index >= 0):
      self.data_up_change(index)
      index = (index - 1) // 2
    return self.heap


dataArr = [10, 21, 5, 9, 13, 28, 3]
heap_tree = Heap_tree()
heap_tree.create_tree(dataArr)

def heap_tree_sample():
  print('heap tree: ', heap_tree.heap)

def heap_tree_get_min_sample():
  tree = heap_tree
  print('Get min node: ', heap_tree.get_min_node())
  print('Min node removed: ', heap_tree.heap)

  print('Get min node: ', heap_tree.get_min_node())
  print('Min node removed(2): ', heap_tree.heap)

def heap_tree_append_sample():
  tree = heap_tree
  for i in range(3):
    inser_val = eval(input('Insert value: '))
    print(tree.append(inser_val))
    pass
  # print('Insert value: 2', tree.append(2))
  # print('Inserted result: ', tree.heap)

if __name__ == "__main__":
    # heap_tree_sample()
    # heap_tree_get_min_sample()
    heap_tree_append_sample()
