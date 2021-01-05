def greedy_pick_radio(request_cities=set(), radios={}):
  remain_cities = request_cities
  greedy_radios = set()

  while remain_cities:
    greedy_choose_radio = None
    cities_covered_now = set()
    for radio, areas in radios.items():
      # 取交集
      cover_cities = remain_cities & areas
      # 取能覆蓋最大範圍的radio
      if len(cover_cities) > len(cities_covered_now):
        greedy_choose_radio = radio
        cities_covered_now = cover_cities
    # 排除掉覆蓋的cities
    remain_cities -= cities_covered_now
    greedy_radios.add(greedy_choose_radio)
  
  return greedy_radios

request_cities = set([
  'Taipei', 'Keelung', 'Taoyuang', 'Hsinchu',
  'Taichung', 'Chiayi', 'Tainan', 'Kaosiung'
])

all_radios = {
  'Radio 1': set(['Hsinchu', 'Taichung', 'Chiayi']),
  'Radio 2': set(['Keelung', 'Hsinchu', 'Taipei']),
  'Radio 3': set(['Taoyuang', 'Taichung', 'Tainan']),
  'Radio 4': set(['Taichung', 'Chiayi']),
  'Radio 5': set(['Tainan', 'Kaosiung']),
}

def main():
  res = greedy_pick_radio(request_cities, all_radios)
  print(res)

if __name__ == "__main__":
    main()