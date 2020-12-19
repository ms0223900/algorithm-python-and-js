class Factorial():
  def __init__(self):
    self.fact = 0
  
  def print_fact_called_before(self, n):
    print('factorial(%d)called before %d! = %d' % (n, n, self.fact))

  def print_fact_called_returned(self, n):
    print('factorial(%d)called returned: %d! = %d' % (n, n, self.fact))

  def factorial(self, n):
    if n == 1:
      self.print_fact_called_before(n)
      print('Arrive at recursion endding n = 1.')
      self.fact = 1
      self.print_fact_called_returned(n)
      return self.fact
    else:
      self.print_fact_called_before(n)
      self.fact = n * self.factorial(n - 1)
      self.print_fact_called_returned(n)
      return self.fact

def main():
  n = eval(input('Input factor n: '))
  # n = 5
  print(n, 'of factorial is = ', Factorial().factorial(n))

if __name__ == "__main__":
    main()

