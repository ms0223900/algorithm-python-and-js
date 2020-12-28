const SEARCH_RES = {
  'notFound': 'not-found',
  'found': 'found',
}

class NodeBtreeCrud {
  searchValue(value) {
    if(value < this.data) {
      if(this.left) {
        return this.left.searchValue(value)
      } else {
        return ({
          searchRes: SEARCH_RES.notFound,
          value: undefined,
        })
      }
    }
    else if(value > this.data) {
      if(this.right) {
        return this.right.searchValue(value)
      } else {
        return ({
          searchRes: SEARCH_RES.notFound,
          value: undefined,
        })
      }
    }
    return ({
      searchRes: SEARCH_RES.found,
      value,
      node: this,
    })
  }
}

module.exports = {
  NodeBtreeCrud
}