INF = 99999

# 算節點之間的權重
def get_edges(graph):
  n1 = []
  n2 = []
  weights = []

  for i in graph:
    for j in graph[i]:
      # 如果不是自己與自己
      if graph[i][j] != 0:
        n1.append(i) # 該node到其他點 e.g.['A', 'A']
        n2.append(j) # 該node到其他點 e.g.['B', 'C']
        weights.append(graph[i][j]) # 該node到其他點的權重 e.g.[1, 2]
        # 組合起來(用loop循環): A -> B 的權重為 1
  
  return n1, n2, weights 

def bellman_ford(graph, start):
  n1, n2, weights = get_edges(graph)
  # print(n1, n2)
  res = dict((i, INF) for i in graph)
  res[start] = 0

  # 執行n - 1次(不包含start)
  for i in range(len(graph) - 1):
    cycle = 0
    for j in range(len(weights)):
      new_val = res[n1[j]] + weights[j]
      if new_val < res[n2[j]]:
        res[n2[j]] = new_val
        cycle = 1
    if cycle == 0:
      break
  
  # 檢查負迴圈，也就是說查看是否有數值加起來越來越小，導致無限循環
  flag = 0
  for i in range(len(res)):
    if res[n1[i]] + weights[i] < res[n2[i]]:
      flag = 1
      break
    if flag:
       return 'Negative loop graph.'
  
  return res

def main():
  graph = {
    'A': {'A': 0, 'B': -1, 'C': 4},
    'B': {'B': 0, 'C': 3, 'D': 2, 'E': 2},
    'C': {'C': 0},
    'D': {'D': 0, 'B': 1, 'C': 5, 'F': 4},
    'E': {'E': 0, 'D': -3, 'F': 2},
    'F': {'F': 0},
  }
  res = bellman_ford(graph, 'A')
  print(res)

def practice():
  graph = {
    'A': {'A': 0, 'B': -1, 'C': 4},
    'B': {'B': 0, 'C': 3, 'D': 2, 'E': 2, 'H': 4},
    'C': {'C': 0},
    'D': {'D': 0, 'B': 1, 'C': 5, 'G': 4},
    'E': {'E': 0, 'D': -3, 'G': 2},
    'G': {'G': 0, 'H': -1},
    'H': {'H': 0, 'G': 3},
  }
   
  start = input('Input start: ')
  res = bellman_ford(graph, start)
  print(res)

if __name__ == "__main__":
    # main()
    practice()