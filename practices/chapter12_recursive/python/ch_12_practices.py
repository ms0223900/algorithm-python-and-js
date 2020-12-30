import math

def recursive_cal_arr_length(arr=[], prev=0):
  if not arr:
    return prev
  arr.pop()
  return recursive_cal_arr_length(arr, prev + 1)

def recursive_find_max(data_list=[], max_now=math.inf*-1):
  if not data_list:
    return max_now
  data_now = data_list.pop()

  if data_now > max_now:
    return recursive_find_max(data_list, data_now)
  else:
    return recursive_find_max(data_list, max_now)

def accumulate_1(n):
  if n == 0:
    return 0
  res = (1 / n) + accumulate_1(n - 1)
  print('accumulate_1({}) = {}'.format(n, res))
  return res

def accumulate_2(n):
  if n == 0:
    return 0
  res = (n / (n + 1)) + accumulate_2(n - 1)
  print('accumulate_2({}) = {}'.format(n, res))
  return res

def main():
  data_list = [1, 10, 4, 6]
  print('Length: ', recursive_cal_arr_length(list(data_list)))
  print('Max: ', recursive_find_max(list(data_list)))

def accumulate_sample():
  n = int(input('Input n: '))
  accumulate_1(n)
  accumulate_2(n)

if __name__ == "__main__":
    # main()
    accumulate_sample()