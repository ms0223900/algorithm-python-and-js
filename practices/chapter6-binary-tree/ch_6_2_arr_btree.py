class Arr_btree():
  def create(self, tree_level, data):
    tree = [0] * pow(2, tree_level)
    for i in range(len(data)):
      level_now = 0
      if i == 0:
        tree[0] = data[0]
      else:
        while(tree[level_now]):
          if data[i] > tree[level_now]:
            level_now = level_now * 2 + 2
          else:
            level_now = level_now * 2 + 1
        tree[level_now] = data[i]
    return tree

data = [10, 23, 5, 9, 13, 28]
arr_btree = Arr_btree().create(3, data)

def print_arr_btree():
  for i in range(len(arr_btree)):
    print('arr btree[%d] = %d' % (i, arr_btree[i]))

if __name__ == "__main__":
    print_arr_btree()

