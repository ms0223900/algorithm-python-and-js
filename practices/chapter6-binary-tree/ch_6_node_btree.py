from ch_6_basic_btree_node import Node

class Node_btree_order_print(Node):
  # 中序列印，會印出"由小到大"
  # 先往左遞迴深層的找最小，再依序往右把結果塞進去
  def inorder_print(self, res=[]):
    if self.left:
      self.left.inorder_print(res)
    # print(self.data)
    res.append(self.data)
    if self.right:
      self.right.inorder_print(res)
    return res

  def inorder_print_desc(self, res=[]):
    if self.right:
      self.right.inorder_print_desc(res)
    res.append(self.data)
    if self.left:
      self.left.inorder_print_desc(res)
      pass
    return res

  def pre_order(self, res=[]):
    res.append(self.data) # 從根結點、葉節點開始取值
    if self.left:
      self.left.pre_order(res)
      pass
    if self.right:
      self.right.pre_order(res)
      pass
    return res

  def post_order(self, res=[], level=0, levels=[]):
    if self.left:
      self.left.post_order(res, level+1, levels)
    if self.right:
      self.right.post_order(res, level+1, levels)
    levels.append(level)
    res.append(self.data) # 先找到左邊最深層子節點最右邊的
    # return res
    return {
      "post_ordered_res": res,
      "max_level": max(levels),
    }

class Node_btree_crud(Node):
  def search(self, value):
    if value < self.data:
      if not self.left: # 如果往左找不到子節點
        return str(value) + ' is not exist.'
      return self.left.search(value)
    elif value > self.data:
      if not self.right: # 如果往右找不到子節點
        return str(value) + ' is not exist.'
        pass
      return self.right.search(value)
    else:
      return str(value) + ' found.'
    pass

class Node_btree(Node_btree_order_print, Node_btree_crud):  
  def insert_node(self, data):
    if self.data:
      if data < self.data:
        if self.left:
          self.left.insert_node(data)
        else:
          self.left = Node_btree(data)
      else:
        if self.right:
          self.right.insert_node(data)
          pass
        else:
          self.right = Node_btree(data)
    else:
      self.data = data

  def insert_from_arr(self, arr=[]):
    for data in arr:
      self.insert_node(data)
    return self
    pass
  pass

arr_data = [10, 20, 11, 5, 21, 38, 22, 100]
node_btree = Node_btree()
node_btree.insert_from_arr(arr_data)

def node_btree_example():
  print_res = node_btree.inorder_print()
  print('inorder result(asc): ', print_res)

  print_res_desc = node_btree.inorder_print_desc()
  print('inorder result(desc): ', print_res_desc)
  
  pre_order_res = node_btree.pre_order()
  print('pre-order result: ', pre_order_res)
  
  post_order_res = node_btree.post_order([])
  print('post-order result: ', post_order_res)

def node_btree_crud_example():
  search_val = 21
  search_res = node_btree.search(search_val)
  print('search val from node tree: ', search_res)

  search_val_from_input = eval(input('Input search value: '))
  print('search %d from node tree: ' % (search_val_from_input) + node_btree.search(search_val_from_input))

if __name__ == "__main__":
    node_btree_example()
    # node_btree_crud_example()