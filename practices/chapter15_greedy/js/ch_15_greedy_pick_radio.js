function greedyPickRadio(requestCities=[], radios={}) {
  let remainCities = [...requestCities]
  let greedyRadios = []

  while (remainCities.length > 0) {
    let chosenRadio = undefined
    let coveredCities = []
    
    for (const radioKey in radios) {
      const radioCities = radios[radioKey]
      // 取交集
      const intersectionCovered = remainCities.filter(
        c => radioCities.includes(c)
      )
      if(intersectionCovered.length > coveredCities.length) {
        chosenRadio = radioKey
        coveredCities = intersectionCovered
      }
    }
    // 取差集
    remainCities = remainCities.filter(
      c => !coveredCities.includes(c)
    )
    greedyRadios.push(chosenRadio)
  }

  return greedyRadios
}

function main() {
  const requestCities = [
    'Taipei', 'Keelung', 'Taoyuang', 'Hsinchu',
    'Taichung', 'Chiayi', 'Tainan', 'Kaosiung'
  ]

  const allRadios = {
    'Radio 1': ['Hsinchu', 'Taichung', 'Chiayi'],
    'Radio 2': ['Keelung', 'Hsinchu', 'Taipei'],
    'Radio 3': ['Taoyuang', 'Taichung', 'Tainan'],
    'Radio 4': ['Taichung', 'Chiayi'],
    'Radio 5': ['Tainan', 'Kaosiung'],
  }

  const res = greedyPickRadio(requestCities, allRadios)
  console.log(res)
}

main()