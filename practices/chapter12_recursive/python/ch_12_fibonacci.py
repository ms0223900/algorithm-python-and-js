def fib(i=0):
  if i == 0:
    return 0
  elif i == 1:
    return 1
  else:
    return fib(i - 1) + fib(i - 2)

def memoFib(i):
  result = list(map(lambda n: None, list(range(i + 1))))
  result[0] = 0
  result[1] = 1

  def innerFib(i):
    is_int = isinstance(result[i], int)
    if not is_int == True:
      result[i] = innerFib(i - 1) + innerFib(i - 2)
    return result[i]
      
  return innerFib

def main():
  number = int(input('Input number for fibonacci: '))
  print('Result: ', fib(number))
  print('Result: ', memoFib(number)(number))

if __name__ == "__main__":
    main()