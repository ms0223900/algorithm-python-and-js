def check_is_goal(node):
  if node == 'GOAL':
    return True
  return False

# 此演算法只有辦法知道是否能找到出口(goal)，無回溯或標記死路
def bfs_maze(maze_graph, start):
  visited = []
  queue = [start]
  is_maze_solved = False

  while queue:
    node = queue.pop()
    print(node)
    if check_is_goal(node):
      visited.append(node)
      is_maze_solved = True
      break
    if node not in visited:
      visited.append(node)
      children = maze_graph[node]
      for child in children:
        queue.append(child)

  return {
    'visited': visited,
    'is_maze_solved': is_maze_solved
  }

# 原本是array
# [
#   [1, 1], # A
#   [2, 1], # B
#   [3, 1], # C
#   # ...
# ]

# 轉為圖形，(可以考慮用程式轉換為以下形式)
maze_graph = {
  'A': ['B'],
  'B': ['A', 'C'],
  'C': ['B', 'D', 'E'],
  'D': ['C'],
  'E': ['C', 'H'],
  'F': ['G'],
  'G': ['F', 'H', 'J'],
  'H': ['E', 'G', 'I'],
  'I': ['H', 'GOAL'],
  'J': ['G'],
  'GOAL': ['J']
}

def main():
  res = bfs_maze(maze_graph, 'A')
  print(res)

if __name__ == "__main__":
    main()