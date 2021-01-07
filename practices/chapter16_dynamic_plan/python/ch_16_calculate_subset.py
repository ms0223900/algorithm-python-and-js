def generate_subset(dataList=[]):
  final_subset = [[]]
  for data in dataList:
    final_subset.extend([subset + [item] for subset in final_subset])
  return final_subset

def get_best_choice(dataList=[], max_weight=4):
  subset_items = generate_subset(dataList)
  max_val = 0
  final_items_choice = []
  for items in subset_items:
    if items:
      weight_sum = 0
      value_sum = 0
      # sum items
      for item in items:
        weight_sum += item['weight']
        value_sum += item['value']
        if weight_sum <= max_weight:
          if value_sum > max_val:
            max_val = value_sum
            final_items_choice = items
  
  return max_val, final_items_choice

def main():
  items = [
    {
      'name': 'TV',
      'value': 40000,
      'weight': 3,
    },
    {
      'name': 'SPEAKER',
      'value': 50000,
      'weight': 4,
    },
    {
      'name': 'LAPTOP',
      'value': 20000,
      'weight': 1,
    }
  ]

  max_val, final_items_choice = get_best_choice(items, 4)
  print('Items = {}, \nValues = {}'.format(final_items_choice, max_val))

if __name__ == "__main__":
    main()