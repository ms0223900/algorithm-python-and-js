def selection_sort(data_list=[]):
  res = data_list
  last_index = len(data_list) - 1

  for i in range(last_index):
    min_idx = i
    for j in range(min_idx, last_index + 1):
      if res[j] < res[min_idx]: # loop找這一輪的最小值
        min_idx = j
      pass
    if i == min_idx: # 確認是最小值了
      pass
    else: # 否則找到最小值後，跟這一輪的i對調
      res[i], res[min_idx] = res[min_idx], res[i]
    pass

  return res

def custom_selection_sort(data_list=[]):
  def fn(compareFn):
    res = data_list
    last_index = len(data_list) - 1

    for i in range(last_index):
      min_idx = i
      for j in range(min_idx, last_index + 1):
        if res[j] < res[min_idx]: # loop找這一輪的最小值
          min_idx = j
        pass
      if i == min_idx: # 確認是最小值了
        pass
      else: # 否則找到最小值後，跟這一輪的i對調
        res[i], res[min_idx] = res[min_idx], res[i]
      pass

    return res
  return fn

def sort_obj_list(data_list=[], compare_obj_key=''):
  if len(data_list) == 0:
    return data_list
    pass
  elif not compare_obj_key in data_list[0]:
    return data_list

  res = data_list
  last_index = len(data_list) - 1

  for i in range(last_index):
    min_idx = i
    for j in range(min_idx, last_index + 1):
      if res[j][compare_obj_key] < res[min_idx][compare_obj_key]:
        min_idx = j
      pass
    if i == min_idx: # 確認是最小值了
      pass
    else: # 否則找到最小值後，跟這一輪的i對調
      res[i], res[min_idx] = res[min_idx], res[i]
    pass

  return res


def main():
  data_list = [1, 100, 87, 2, 8, 6, 54]
  print('Origin data list: ', data_list)
  print('Sorted: ', selection_sort(data_list))

def sort_obj_list_sample():
  obj_list = [
    {
      'name': 'Sam',
      'viewers': 1000,
    },
    {
      'name': 'Kevin',
      'viewers': 500,
    },
    {
      'name': 'Peter',
      'viewers': 2000,
    },
  ]
  print('Origin data list: ', obj_list)
  print('Sorted: ', sort_obj_list(obj_list, 'viewers'))


if __name__ == "__main__":
    # main()
    sort_obj_list_sample()