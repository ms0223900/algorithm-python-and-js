def bubble_sort(listData=[]):
  res = listData
  length = len(listData)
  for i in range(length - 1):
    inner_length = length - i - 1
    for j in range(inner_length):
      if res[j] > res[j + 1]:
        res[j], res[j + 1] = res[j + 1], res[j]
      pass
    pass
  return res

def custom_bubble_sort(listData, compareFn):
  res = listData
  length = len(listData)
  for i in range(length - 1):
    inner_length = length - i - 1
    for j in range(inner_length):
      if compareFn(res[j], res[j + 1]):
        res[j], res[j + 1] = res[j + 1], res[j]
      pass
    pass
  return res

def compare_two_desc(prev, _next):
  if prev < _next:
    return True
  return False

def main():
  data_list = [1, 3, 4, 10, 2, 9, 8, 2.5]
  print('Bubble sorted: ', bubble_sort(data_list))
  print('Custom Bubble sorted: ', custom_bubble_sort(data_list, compare_two_desc))

if __name__ == "__main__":
    main()