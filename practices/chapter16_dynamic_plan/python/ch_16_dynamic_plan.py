def dynamic_plan_knapsack(item_list=[], max_weight=4):
  length = len(item_list)
  # init table array
  values_plan_table = [[0 for x in range(max_weight + 1)] for x in range(length + 1)]
  picked_items = [[[] for x in range(max_weight + 1)] for x in range(length + 1)]

  for row in range(length + 1): # row是商品
    prev_row = row - 1 # 找上一個
    for column in range(max_weight + 1): # column是重量
      weight = item_list[prev_row]['weight']
      if row == 0 or column == 0:
        values_plan_table[row][column] = 0
      elif weight <= column:
          value = item_list[prev_row]['value']
          remain_weight = column - weight
          prev_val = values_plan_table[prev_row][column]
          next_val = value + values_plan_table[prev_row][remain_weight]
          max_val = max(next_val, prev_val)
          values_plan_table[row][column] = max_val
          # 如果有更新，則加上新的
          if next_val > prev_val:
            picked_items[row][column] = picked_items[prev_row][remain_weight] + [item_list[prev_row]['name']]
          else:
            # 否則跟上一個一樣
            picked_items[row][column] = picked_items[prev_row][column]
      else:
        values_plan_table[row][column] = values_plan_table[prev_row][column]
        picked_items[row][column] = picked_items[prev_row][column]
  # print(picked_items)
  return {
    'max_value': values_plan_table[length][max_weight],
    'picked_items': picked_items[length][max_weight]
  } # 找最後一個

def main():
  items = [
    {
      'name': 'SPEAKER',
      'value': 50000,
      'weight': 4,
    },
    {
      'name': 'LAPTOP',
      'value': 20000,
      'weight': 1,
    },
    {
      'name': 'MOBILE',
      'value': 25000,
      'weight': 1,
    },
    {
      'name': 'TV',
      'value': 40000,
      'weight': 3,
    },
  ]
  res = dynamic_plan_knapsack(items, 4)
  print('Max value: ', res['max_value'])
  print('Picked items: ', res['picked_items'])

def practice():
  items = [
    {
      'name': 'SPOT_1',
      'value': 7,
      'weight': 0.5,
    },
    {
      'name': 'SPOT_2',
      'value': 6,
      'weight': 0.5,
    },
    {
      'name': 'SPOT_3',
      'value': 9,
      'weight': 1
    },
    {
      'name': 'SPOT_4',
      'value': 9,
      'weight': 2,
    },
    {
      'name': 'SPOT_5',
      'value': 8,
      'weight': 0.5,
    },
  ]
  MAX_WIEGHTS = 4
  handled_items = list(map(lambda item: {
    'name': item['name'],
    'value': item['value'],
    'weight': int(item['weight'] * 2)
  }, items))

  res = dynamic_plan_knapsack(handled_items, MAX_WIEGHTS)
  print('Max value: ', res['max_value'])
  print('Picked items: ', res['picked_items'])

if __name__ == "__main__":
    # main()
    practice()

