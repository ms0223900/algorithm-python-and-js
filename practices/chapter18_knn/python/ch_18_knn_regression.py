import math

def knn(records, target, k):
  distances = []
  record_numbers = []

  for record in records:
    temp = 0
    for i in range(len(target) - 1):
      temp += (target[i] - record[i]) ** 2
    distance = math.sqrt(temp)
    distances.append(distance)
    record_numbers.append(record[len(record) - 1]) # sausage counts
  
  knn_numbers = []
  knn_distances = []
  for count in range(k):
    min_val = min(distances)
    min_index = distances.index(min_val)
    knn_distances.append(distances.pop(min_index))
    knn_numbers.append(record_numbers.pop(min_index))

  return knn_numbers, knn_distances

def get_regression(knn_numbers):
  return int(sum(knn_numbers) / len(knn_numbers))

def main():
  target = [1, 5, 2, 'val']
  records = [
    [0, 3, 3, 100],
    [2, 4, 3, 250],
    [2, 5, 6, 350],
    [1, 4, 2, 180],
    [2, 3, 1, 170],
    [1, 5, 4, 300],
    [0, 1, 1, 50],
    [2, 4, 3, 270],
    [2, 2, 4, 230],
    [1, 3, 5, 165],
    [1, 5, 5, 320],
    [2, 5, 1, 210],
  ]
  k = 5
  res = knn(records, target, k)
  print('You need %d' % get_regression(res[0]))

if __name__ == "__main__":
    main()