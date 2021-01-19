import numpy as np
import matplotlib.pyplot as plt

def get_distance(x1, y1, x2, y2):
  return int(((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5)

def clustering(x, y, cx, cy, cluster_number, seeds_amount):
  clusters = []

  for i in range(cluster_number):
    clusters.append([]) # init
  for seed_i in range(seeds_amount):
    distance_now = np.Infinity
    cluster_index = 0
    for cluster_i in range(cluster_number):
      dist = get_distance(x[seed_i], y[seed_i], cx[cluster_i], cy[cluster_i])
      if dist < distance_now:
        distance_now = dist
        cluster_index = cluster_i
    clusters[cluster_index].append([x[seed_i], y[seed_i]]) # 將seed加入群集

  return clusters

def kmeans(x, y, cx, cy, cluster_number, seeds_amount):
  clusters = clustering(x, y, cx, cy, cluster_number, seeds_amount)
  plt.scatter(x, y, color='b')
  plt.scatter(cx, cy, color='r')

  cluster_colors = ['r', 'g', 'b']
  for index, node in enumerate(clusters):
    line_x_points = []
    line_y_points = []
    for n in node:
      line_x_points.append([n[0], cx[index]])
      line_y_points.append([n[1], cy[index]])
    color = cluster_colors[index]
    for i in range(len(line_x_points)):
      plt.plot(line_x_points[i], line_y_points[i], color=color)
  
  plt.show()
  return clusters

def make_new_cluster(clusters):
  new_x_points = []
  new_y_points = []
  for index, node in enumerate(clusters):
    node_x, node_y = 0, 0
    for n in node: # 加總該群集的每個點
      node_x += n[0]
      node_y += n[1]

    new_x_points.append([])
    new_y_points.append([])
    new_x_points[index] = int(node_x / len(node)) # 該群集的中心x
    new_y_points[index] = int(node_y / len(node)) # 該群集的中心y

  return new_x_points, new_y_points

def main():
  cluster_number = 3
  seeds = 50
  limits = 100
  
  x = np.random.randint(0, limits, seeds)
  y = np.random.randint(0, limits, seeds)
  cluster_center_x = np.random.randint(0, limits, cluster_number)
  cluster_center_y = np.random.randint(0, limits, cluster_number)
  
  init_clusters = kmeans(x, y, cluster_center_x, cluster_center_y, cluster_number, seeds)
  while True:
    new_x_points, new_y_points = make_new_cluster(init_clusters)
    x_points_list = list(cluster_center_x)
    y_points_list = list(cluster_center_y)
    if new_x_points == x_points_list and new_y_points == y_points_list:
      break
    else:
      cluster_center_x = new_x_points
      cluster_center_y = new_y_points
      init_clusters = kmeans(x, y, cluster_center_x, cluster_center_y, cluster_number, seeds)

if __name__ == "__main__":
    main()