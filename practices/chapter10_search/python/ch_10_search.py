import math

def seqFind(source=[], target=math.inf):
  for data in source:
    if data == target:
      return target
  return None

def get_middle_idx(_first_idx=0, _last_idx=0):
  return (_first_idx + _last_idx) // 2

# def mapFn(source=[]):
#   res = list(source)
#   for i in range(len(source)):
#     res[i] = {
#       'index': i,
#       'data': source[i]
#     }
#   return res

def binary_search(source=[], target=math.inf):
  # mapped_source = mapFn(source)
  # print(mapped_source)
  sorted_source = sorted(source)
  # print(sorted_source)
  
  first_idx = 0
  last_idx = len(source) - 1
  middle_idx = get_middle_idx(first_idx + last_idx)

  find_index = -1
  find_res = None
  find_times = 0

  while True:
    middle_data = sorted_source[middle_idx]
    find_times += 1
    if target == middle_data:
      find_res = target
      find_index = middle_idx
      break
    elif target < middle_data:
      last_idx = middle_idx - 1
    else:
      first_idx = middle_idx + 1
    middle_idx = get_middle_idx(first_idx, last_idx)
    if first_idx > last_idx:
      break

  return {
    'find_index': find_index,
    'find_res': find_res,
    'find_times': find_times,
  }

def find_max(source=[]):
  res = math.inf * -1
  for data in source:
    if data > res:
      res = data
  return res

def find_min(source=[]):
  res = math.inf
  for data in source:
    if data < res:
      res = data
  return res

def main():
  data_list = [9, 3, 2, 8, 7, 10, 6, 5, 4, 1,]
  target = eval(input('Input value you want to find: '))
  print('Search result(seq): ', seqFind(data_list, target))
  print('Search result(binary): ', binary_search(data_list, target))

  print('Min value: ', find_min(data_list))
  print('Max value: ', find_max(data_list))

if __name__ == "__main__":
    main()