from pprint import pprint


# 0 為可以走的, 1 為牆壁, 2為已走過的路徑, 3為標示不可走的
small_maze = [
  [1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 1],
  [1, 0, 0, 0, 1, 1],
  [1, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
]

big_maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
]

directions_fns = [
  lambda x, y: (x - 1, y), # left
  lambda x, y: (x + 1, y), # right
  lambda x, y: (x, y - 1), # down
  lambda x, y: (x, y + 1), # up
]

def solve_maze(start_pos=[], goal_pos=[], maze=[]):
  maze_res = maze
  maze_res[start_pos[0]][start_pos[1]] = 2
  maze_path_stack = []
  maze_path_stack.append(start_pos)

  while len(maze_path_stack) > 0:
    current_pos = maze_path_stack[-1] # last position
    if current_pos[0] == goal_pos[0] and current_pos[1] == goal_pos[1]:
      print('Maze cleared!')
      return maze_res
    for direction in directions_fns:
      next_pos = direction(current_pos[0], current_pos[1])
      if maze_res[next_pos[0]][next_pos[1]] == 0:
        maze_path_stack.append(next_pos)
        maze_res[next_pos[0]][next_pos[1]] = 2
        break
    else:
      maze_res[current_pos[0]][current_pos[1]] = 3
      maze_path_stack.pop()

  print('Path not found')
  return maze_res

def main():
  solved_maze = solve_maze([1, 1], [4, 4], small_maze)
  pprint(solved_maze)

def convert_input_to_arr(input_str='1,1'):
  split_arr = input_str.split(',')
  res = list(map(lambda str: int(str), split_arr))
  return res

def custom_start_maze():
  # start_pos_str = '1,1'
  start_pos_str = input('Input start(e.g. 1,1): ')
  # goal_pos_str = '7,7'
  goal_pos_str = input('Input goal(e.g. 7,7): ')

  start_pos = convert_input_to_arr(start_pos_str)
  goal_pos = convert_input_to_arr(goal_pos_str)
  print(start_pos, goal_pos)
  solved_maze = solve_maze(start_pos, goal_pos, big_maze)
  pprint(solved_maze)

if __name__ == "__main__":
    # main()
    custom_start_maze()
