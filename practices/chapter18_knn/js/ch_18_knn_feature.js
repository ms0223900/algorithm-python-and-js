function calKnn(targetFilm, films) {
  let allDistances = []
  
  for (const film of films) {
    let distanceSum = 0
    feats = film.feats
    for (let i = 0; i < feats.length; i++) {
      const feat = feats[i];
      distanceSum += Math.pow((targetFilm.feats[i] - feat), 2)
    }
    const distance = Math.pow(distanceSum, 1/2)
    allDistances.push(distance)
  }

  const minDistance = Math.min(...allDistances)
  const minDistFilmIndex = allDistances.findIndex(d => d === minDistance)
  const minDistFilm = films[minDistFilmIndex]

  return ({
    minDistance,
    minDistFilm,
  })
}

function main() {
  const target_film = {
    'title': 'the_fast_and_furious',
    'feats': [5, 7, 8, 10, 2]
  }
  
  const films = [
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

  const res = calKnn(target_film, films)
  console.log('Most recommended film: ', res)
}

main()