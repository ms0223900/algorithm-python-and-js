def merge(left_arr=[], right_arr=[]):
  res = []

  while left_arr and right_arr:
    if left_arr[0] <= right_arr[0]:
      res.append(left_arr.pop(0))
    else:
      res.append(right_arr.pop(0))
  if left_arr:
    res += left_arr
  if right_arr:
    res += right_arr
  
  print('Merged: ', res)
  return res

def merge_sort(data_list):
  if len(data_list) <= 1:
    return data_list

  middle_index = len(data_list) // 2
  left_sort = data_list[:middle_index]
  right_sort = data_list[middle_index:]

  # 每次都切一半去sort，最後再把結果合起來
  print('Left: ', left_sort, 'Right: ', right_sort)
  left_sort = merge_sort(left_sort)
  right_sort = merge_sort(right_sort)

  return merge(left_sort, right_sort)

def main():
  data_list = [9, 3, 2, 8, 7, 10, 6, 5, 4, 1,]
  print('Origin data list: ', data_list)
  print('Merge sorted: ', merge_sort(data_list))

if __name__ == "__main__":
    main()
  