MAX_WEIGHT = 1

things_in_pack = {
  'AppleWatch': (15000, 0.1),
  'AsusLaptop': (35000, 0.7),
  'Iphone': (38000, 0.3),
  'AcerLaptop': (40000, 0.8),
  'GoPro': (12000, 0.1)
}

# 盡可能在max weight之內塞最大價值的物品
# things要先排序
def greedy_pack(things):
  length = len(things)
  picked_thing_list = []
  # 先塞價值最高的
  last_thing = things[length - 1]
  picked_thing_list.append(last_thing)
  # 總重先加上價值最高的物品重量
  weights = last_thing[1][1]

  for i in range(length - 1, -1, -1):
    thing_weight = things[i][1][1]
    if thing_weight + weights <= MAX_WEIGHT:
      picked_thing_list.append(things[i])
      weights += thing_weight

  return picked_thing_list

def main():
  # 只會找出"還可以"的結果，並不一定是最佳解
  sorted_things = sorted(things_in_pack.items(), key=lambda item: item[1][0])
  picked_res = greedy_pack(sorted_things)
  for i in range(len(picked_res)):
    print('{0:8s}{1:10d}{2:10.2f}'.format(picked_res[i][0], picked_res[i][1][0], picked_res[i][1][1]))

if __name__ == "__main__":
    main()