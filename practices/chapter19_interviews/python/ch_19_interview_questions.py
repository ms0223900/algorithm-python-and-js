import math

def checkIsPrime(num):
  root_half = int(num ** 0.5)
  for factor in range(2, root_half):
    if num % factor == 0:
      return False
  return True
def inputAndCheckPrime():
  num = input('Input number for check is prime: ')
  res = checkIsPrime(int(num))
  if res:
    print('%s is prime' % num)
  else:
    print('%s is NOT prime' % num)

def checkIsPalindrome(word):
  word_list = list(word)
  while len(word_list) > 1:
    if word_list.pop(len(word_list) - 1) != word_list.pop(0):
      return False
  return True
def input_and_checkPalindrome():
  word = input('Input word for check is palindrome: ')
  res = checkIsPalindrome(word)
  if res:
    print('%s is palindrom' % word)
  else:
    print('%s is NOT palindrom' % word)

def get_greatest_common_divisor(num1, num2):
  res = 1
  factor = 2
  while factor <= num1 and factor <= num2:
    if num1 % factor == 0 and num2 % factor == 0:
      res = factor
    factor += 1
  return res
def input_and_get_greatest_common_divisor():
  num1 = int(input('Input num1: '))
  num2 = int(input('Input num2: '))
  res = get_greatest_common_divisor(num1, num2)
  print('%d and %d have greatest common divisor: %d' % (num1, num2, res))

def get_gcd(num1, num2):
  if num1 < num2:
    num1, num2 = num2, num1
  while num2 != 0:
    remainder = num1 % num2
    num1 = num2
    num2 = remainder
  return num1
def get_gcd_recursive(num1, num2):
  if num1 < num2:
    if num1 == 0:
      return num2
    return get_gcd_recursive(num2 % num1, num1)
  return get_gcd_recursive(num1 % num2, num2)

def get_least_common_multiple(num1, num2):
  return (num1 * num2) // get_gcd(num1, num2) # 雙除號是取整數

def count_rabbit_and_chicken(heads_amount=0, foot_amount=0):
  chicken_amount = 0
  while chicken_amount <= heads_amount:
    rabbits_amount = heads_amount - chicken_amount
    if rabbits_amount * 4 + chicken_amount * 2 == foot_amount:
      return {
        'chicken_amount': chicken_amount,
        'rabbits_amount': rabbits_amount
      }
    chicken_amount += 1
  return None
def input_and_count_rabbit_and_chicken():
  heads_amount = int(input('Input how many heads: '))
  foot_amount = int(input('Input how many foot: '))
  res = count_rabbit_and_chicken(heads_amount, foot_amount)
  if res:
    print('Chicken: %d, Rabbits: %d' % (res['chicken_amount'], res['rabbits_amount']))
  else:
    print('Input error...')

def get_dynamic_max(target_weight=0, value_list=[]):
  length = len(value_list)
  table = [[0 for x in range(target_weight + 1)] for x in range(length + 1)]
  plan_table = [[[] for x in range(target_weight + 1)] for x in range(length + 1)]
  # print(table)

  for t in range(length + 1):
    for weight in range(target_weight + 1):
      if t == 0 or weight == 0:
        table[t][weight] = 0
        plan_table[t][weight] = []
      elif value_list[t - 1]['weight'] <= weight:
        next_value = value_list[t - 1]['value'] + table[t - 1][weight - value_list[t - 1]['weight']]
        value_now = table[t - 1][weight]
        if next_value > value_now:
          plan_table[t][weight] = plan_table[t - 1][weight] + [value_list[t - 1]['name']]
        else:
          plan_table[t][weight] = [value_list[t - 1]['name']]
        table[t][weight] = max(next_value, value_now)
      else:
        table[t][weight] = table[t - 1][weight]
        plan_table[t][weight] = [plan_table[t - 1][weight]]
  return table[length][target_weight], plan_table[length][target_weight]

def calc_dynamic_max():
  weight_value_list = [
    {
      'name': 'Mt.A',
      'value': 10,
      'weight': 3
    },
    {
      'name': 'Mt.B',
      'value': 16,
      'weight': 4
    },
    {
      'name': 'Mt.C',
      'value': 20,
      'weight': 3
    },
    {
      'name': 'Mt.D',
      'value': 22,
      'weight': 5
    },
    {
      'name': 'Mt.E',
      'value': 25,
      'weight': 5
    },
  ]
  max_value, best_plan = get_dynamic_max(10, weight_value_list)
  print('Max value: ', max_value)
  print('Best plan: ', best_plan)



def main():
  # input_and_checkPalindrome()
  # input_and_get_greatest_common_divisor()
  # print(get_least_common_multiple(30, 42))
  # input_and_count_rabbit_and_chicken()
  calc_dynamic_max()

if __name__ == "__main__":
    main()