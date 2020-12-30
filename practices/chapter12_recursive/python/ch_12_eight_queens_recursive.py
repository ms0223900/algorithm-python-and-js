class Queens():
  def __init__(self, table_size=0):
    self.table_size = table_size
    self.queens_positions = [-1] * table_size
    self.solve(0)

  def check_queens_can_put(self, row, col):
    for i in range(1, row + 1):
      if (self.queens_positions[row - i] == col 
        or self.queens_positions[row - i] == col - i # left up 左斜上
        or self.queens_positions[row - i] == col + i ): # right up 右斜上
        return False
    return True

  def solve(self, row):
    # 找完了
    print('Row', row)
    if row == self.table_size:
      return True
    for col in range(self.table_size):
      print('Col', col)
      self.queens_positions[row] = col
      if self.check_queens_can_put(row, col) and self.solve(row + 1):
        return True
    return False

  def print_queens(self):
    for i in range(self.table_size): # print row
      for j in range(self.table_size):
        if self.queens_positions[i] == j:
          print('Q', end='')
        else:
          print('□', end='')
      print('\n')

def main():
  resolved_queens = Queens(8)
  resolved_queens.print_queens()

if __name__ == "__main__":
    main()