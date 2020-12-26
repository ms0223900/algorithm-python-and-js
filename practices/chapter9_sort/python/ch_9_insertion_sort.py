def insertion_sort(data_list=[]):
  length = len(data_list)
  if length == 1:
    return data_list
  
  res = data_list
  for i in range(length):
    for j in range(i, 0, -1):
      if res[j - 1] > res[j]:
        res[j], res[j - 1] = res[j - 1], res[j]
      else:
        break
    pass
  return res

def main():
  data_list = [1, 3, 2, 8, 7, 6, 5, 4]
  print('Origin data list: ', data_list)
  print('Sorted: ', insertion_sort(data_list))

if __name__ == "__main__":
    main()