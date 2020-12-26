import random

def quick_sort(data_list=[]):
  if len(data_list) <= 1:
    return data_list
  
  left = []
  right = []
  pivot_arr = []
  # 隨機挑一個基準點
  pivot_now = random.choice(data_list)
  for data in data_list:
    if data == pivot_now:
      pivot_arr.append(data)
    elif data < pivot_now:
      left.append(data)
    else:
      right.append(data)
  # 遞迴再往左和往右挑基準點排序
  return quick_sort(left) + pivot_arr + quick_sort(right)

def main():
  data_list = [1, 3, 2, 8, 7, 6, 5, 4, 2.5]
  print('Origin data list: ', data_list)
  print('Sorted: ', quick_sort(data_list))

if __name__ == "__main__":
    main()