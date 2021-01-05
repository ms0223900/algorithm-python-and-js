INF = 9999

def greedy_journey(graph=[], request_cities=[], start=''):
  _graph = list(graph)

  distance = 0
  visited_cities = [start]
  start_index = request_cities.index(start)

  # 遍歷所有城市
  for city_index in range(len(request_cities) - 1):
    _graph[start_index][start_index] = INF
    min_distance = min(_graph[start_index])
    distance += min_distance
    # 最小值為此輪的終點
    end_index = _graph[start_index].index(min_distance)
    visited_cities.append(request_cities[end_index])
    # 防止走回頭路
    for i in range(len(_graph)):
      # 此輪的start到其他點
      _graph[start_index][i] = INF
      # 此輪其他點到start
      _graph[i][start_index] = INF
    start_index = end_index

  return distance, visited_cities

def shortest_greedy(get_graph_cb, request_cities=[]):
  distance_now = INF
  best_visited_cities = []

  for start_city in request_cities:
    graph = get_graph_cb()
    distance, visited_cities = greedy_journey(graph, request_cities, start_city)
    if distance < distance_now:
      distance_now = distance
      best_visited_cities = visited_cities
  
  return distance_now, best_visited_cities


cities = ['Hsinchu', 'Chunan', 'Chupei', 'Guanhsi', 'Chudong']

def get_graph():
  graph = [
    [0, 12, 10, 28, 16],
    [12, 0, 20, 35, 19],
    [10, 20, 0, 21, 11],
    [28, 35, 21, 0, 12],
    [16, 19, 11, 12, 0],
  ]
  return graph


def main():
  distance, visited_cities = greedy_journey(get_graph(), cities, 'Hsinchu')
  print('Visited cities(seq): ', visited_cities)
  print('Distance: ', distance)

  shortest_distance, best_visited_cities = shortest_greedy(get_graph, cities)
  print('Best Visited cities(seq): ', best_visited_cities)
  print('Shortest distance: ', shortest_distance)

if __name__ == "__main__":
    main()