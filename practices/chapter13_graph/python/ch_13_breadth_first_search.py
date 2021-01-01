def BFS(graph={}, start='', target=''):
  visited = []
  queue = [start]
  result = False

  while queue:
    # 這個很重要，從前面把值取出來，先將同一層的解決，所以是廣度，否則是深度
    node = queue.pop(0) 
    if target and node == target:
      result = True
      break
    # 因為是雙向連結，所以可能會往回找，需要偵測是否該節點已經找過
    if node not in visited:
      visited.append(node)
      neighbors = graph[node]
      for n in neighbors:
        queue.append(n)

  return {
    'visited': visited,
    'result': result,
  }

# 做雙向連結，意即如果A和B相連，則A的群組要有B，B的群組也要有A
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
  searched_res = BFS(graph, 'A', 'G')
  print(searched_res)

if __name__ == "__main__":
    main()