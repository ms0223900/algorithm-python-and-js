INF = 9999

def dijkstra(graph, start):
  visited_nodes = []
  node_now = start
  res = dict((i, INF) for i in graph)
  res[start] = 0

  while len(visited_nodes) < len(graph):
    visited_nodes.append(node_now)
    for _node in graph[node_now]:
      new_val = res[node_now] + graph[node_now][_node]
      if new_val < res[_node]:
        res[_node] = new_val
    
    next = INF
    # 找最新、最小的node
    for _node in res:
      # 跳過已拜訪過的
      if _node in visited_nodes:
        continue

      if res[_node] < next:
        next = res[_node]
        node_now = _node

  return res

def main():
  #  有向的圖形(不會往回走)
  graph = {
    'A': {'A': 0, 'B': 2, 'C': 4},
    'B': {'B': 0, 'C': 7, 'E': 6},
    'C': {'C': 0, 'D': 6, 'E': 2},
    'D': {'D': 0, 'E': 8, 'F': 4},
    'E': {'E': 0, 'F': 2},
    'F': {'F': 0},
  }
  #  無向的圖形(可以往回走，儘管找完節點就對了)
  graph = {
    'A': {'A': 0, 'B': 2, 'C': 4},
    'B': {'A': 2, 'B': 0, 'C': 7, 'E': 6},
    'C': {'A': 4, 'B': 7, 'C': 0, 'D': 6, 'E': 2},
    'D': {'C': 6, 'D': 0, 'E': 8, 'F': 4},
    'E': {'B': 6, 'C': 2, 'D': 8, 'E': 0, 'F': 2},
    'F': {'D': 4, 'E': 2, 'F': 0},
  }
  start = input('Input start: ')
  res = dijkstra(graph, start)
  print(res)


if __name__ == "__main__":
    main()