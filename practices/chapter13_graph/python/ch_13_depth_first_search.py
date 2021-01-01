def DFS(graph={}, start='', goal=''):
  solved_paths = []
  stack = [start]
  solved_res = False
  
  while stack:
    node = stack.pop()
    solved_paths.append(node)
    if node == goal:
      solved_res = True
      break
    for child in graph[node]:
      if child not in solved_paths:
        stack.append(child)

  return solved_paths

def recursive_dfs(graph, node, goal, solved_paths=[]):
  # print(node)
  solved_paths += [node]
  if node == goal:
    return solved_paths
  for child in graph[node]:
    if child not in solved_paths:
      solved_paths = recursive_dfs(graph, child, goal, solved_paths)
  return solved_paths

graph = {
  'A': ['B', 'C', 'D'],
  'B': ['A', 'E'],
  'C': ['A', 'F'],
  'D': ['A', 'G', 'H'],
  'E': ['B'],
  'F': ['C', 'I', 'J'],
  'G': ['D'],
  'H': ['D'],
  'I': ['F'],
  'J': ['F']
}

def main():
  solved = recursive_dfs(graph, 'F', 'G')
  # 兩者結果不同是正常的，因為一個是從後面(pop)取值，另一個是從頭取值
  print(solved)
  print(DFS(graph, 'F', 'G'))

if __name__ == "__main__":
    main()
    
