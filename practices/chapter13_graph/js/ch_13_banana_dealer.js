class BananaDealerSearch {
  constructor(graph) {
    this.graph = graph
  }

  checkIsBananaDealer(name='') {
    console.log(name)
    if(name.match(/banana/gi)) {
      return true
    }
    return false
  }

  searchDealer(startPerson='') {
    let searchedList = []
    let dealers = []
    dealers.push(...this.graph[startPerson])

    const res = {
      banana_dealer_found_res: false,
      banana_dealer_name: '',
    }

    while(dealers.length > 0) {
      const person = dealers.shift()
      if(this.checkIsBananaDealer(person)) {
        res.banana_dealer_found_res = true
        res.banana_dealer_name = person
        break
      } else {
        searchedList.push(person)
        dealers.push(...this.graph[person])
      }
    }

    return res
  }
}

const friendsGraph = {
  'Tom': ['Ivan', 'Ira', 'Kevin'],
  'Ivan': ['Peter'],
  'Ira': ['Banana_Lin'],
  'Kevin': ['Mary'],
  'Peter': [],
  'Banana_Lin': [],
  'Mary': [],
}

function main() {
  const res = new BananaDealerSearch(friendsGraph).searchDealer('Tom')
  console.log('Searched Result: ', res)
}

main()