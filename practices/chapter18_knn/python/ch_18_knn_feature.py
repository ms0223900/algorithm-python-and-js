import math

target_film = {
  'title': 'the_fast_and_furious',
  'feats': [5, 7, 8, 10, 2]
}

films = [
  {
    'title': 'avengers',
    'feats': [2, 8, 8, 5, 6]
  },
  {
    'title': 'midway',
    'feats': [5, 6, 9, 2, 5]
  },
  {
    'title': 'frozen',
    'feats': [8, 2, 0, 0, 10]
  },
  {
    'title': 'gemini_man',
    'feats': [5, 8, 8, 8, 3]
  },
]

def cal_knn(target_film, films):
  all_dist = []
  for film in films:
    distances = 0
    feats = film['feats']
    
    for feat_index in range(len(feats)):
      distances += (target_film['feats'][feat_index] - feats[feat_index]) ** 2
    
    all_dist.append(math.sqrt(distances))
  
  min_dist = min(all_dist)
  min_dist_film_index = all_dist.index(min_dist)
  min_dist_film = films[min_dist_film_index]

  return {
    'min_dist': min_dist,
    'min_dist_film': min_dist_film,
  }

def main():
  res = cal_knn(target_film, films)
  print(res)

if __name__ == "__main__":
    main()