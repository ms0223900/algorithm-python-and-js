def check_queens_can_put(queens_positions, row, col):
  for i in range(1, row + 1):
    if (queens_positions[row - i] == col 
      or queens_positions[row - i] == col - i # left up 左斜上
      or queens_positions[row - i] == col + i ): # right up 右斜上
      return False
  return True

def find_col(queens_positions, row):
  start = queens_positions[row] + 1
  for col in range(start, len(queens_positions)):
    if check_queens_can_put(queens_positions, row, col):
      return col
  return -1

def solve_eight_queens(queens_positions):
  solved_eight_queens_res = queens_positions
  row = 0
  # 一行一行往下找
  while row >= 0 and row <= 7:
    # print(solved_eight_queens_res)
    col_now = find_col(solved_eight_queens_res, row)
    if col_now < 0:
      solved_eight_queens_res[row] = -1
      row -= 1
    else:
      solved_eight_queens_res[row] = col_now
      row += 1
  
  if row == -1:
    return False
  else:
    return solved_eight_queens_res

def print_table(size=0, queens_positions=[]):
  for i in range(size): # print row
    for j in range(size):
      if queens_positions[i] == j:
        print('Q', end='')
      else:
        print('□', end='')
    print('\n')

TABLE_SIZE = 8
init_queens_positions = [-1] * TABLE_SIZE # index是col(y), value是col(x)

def main():
  solved_res = solve_eight_queens(init_queens_positions)
  if solved_res:
    print_table(TABLE_SIZE, solved_res)
  else:
    print('no-answer :(')

if __name__ == "__main__":
    main()
