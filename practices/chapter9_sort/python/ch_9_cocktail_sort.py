def cocktail_sort(data_list):
  res = data_list
  length = len(data_list)
  start_index = 0
  end_index = length - 1
  is_sorted = True

  while is_sorted:
    is_sorted = False
    # 往右比較與對調
    for i in range(end_index):
      if res[i] > res[i + 1]:
        res[i], res[i + 1] = res[i + 1], res[i]
        is_sorted = True
      pass
    print('To right sorted: ', res)

    if not is_sorted: # 如果不用對調
      break

    # 往左比較與對調
    for i in range(end_index - 1, start_index - 1, -1):
      if res[i] > res[i + 1]:
        res[i], res[i + 1] = res[i + 1], res[i]
        is_sorted = True
      pass
    print('To left sorted: ', res)
    start_index = start_index + 1

  return res

def main():
  data_list = [1, 3, 2, 8, 7]
  print('Origin data', data_list)
  print('Cocktail sorted: ', cocktail_sort(data_list))

if __name__ == "__main__":
    main()
