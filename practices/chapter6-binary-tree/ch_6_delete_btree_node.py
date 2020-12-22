from ch_6_node_btree import Node_btree
from ch_6_node_btree import node_btree

class Delete_btree_node():
  def delete_node(self, btree, dataKey):
    if btree is None:
      return None
    if dataKey < btree.data:
      btree.left = self.delete_node(btree.left, dataKey)
      return btree
    if dataKey > btree.data:
      btree.right = self.delete_node(btree.right, dataKey)
      return btree

    # 如果找到了，且左邊或右邊是空的，找右邊或左邊是來替補
    if btree.left is None:
      new_tree = btree.right
      return new_tree
      pass
    if btree.right is None:
      new_tree = btree.left
      return new_tree
    pass
    # 如果找到了，但是左和右都有子節點
    # 方法一，找左邊節點中最大的
    left_max_node = self.get_max_node(btree.left)

    temp_tree = Node_btree(left_max_node.data)
    temp_tree.left = self.get_left_node(btree.left)
    temp_tree.right = btree.right

    # 方法二，找右邊節點最小的
    ##
    return temp_tree
  pass

  # 找樹中的最大節點，就是往右一直找
  def get_max_node(self, btree):
    node = btree
    while node.right:
      node = node.right
    return node
    pass

  # 
  def get_left_node(self, btree):
    if btree.right is None:
      _tree = btree.left
      return _tree
    # 往右邊找最大的點來替補
    btree.right = self.get_left_node(btree.right)
    return btree


def node_btree_delete_sample():
  _node_btree = node_btree
  node_deleter = Delete_btree_node()
  print('before deleted(inorder print): ', _node_btree.inorder_print([]))

  val_from_input = eval(input('Input search value: '))
  new_btree = node_deleter.delete_node(_node_btree, val_from_input)
  print('deleted result(inorder print): ', new_btree.inorder_print([]))

def main():
  node_btree_delete_sample()

if __name__ == "__main__":
    main()