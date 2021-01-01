import re

def check_is_banana_dealer(name=''):
  if re.match('banana', name, re.I):
    return True
  return False

# 以某人為起點，查他的朋友是否有人是香蕉經銷商
def search_banana_dealer(name, graph):
  searched_list = []

  dealers = []
  dealers += graph[name]
  banana_dealer_found_res = False
  banana_dealer_name = ''

  while dealers:
    person = dealers.pop(0)
    if check_is_banana_dealer(person):
      banana_dealer_found_res = True
      banana_dealer_name = person
      break
    else:
      searched_list.append(person)
      dealers += graph[person]
  return {
    'searched_list': searched_list,
    'banana_dealer_found_res': banana_dealer_found_res,
    'banana_dealer_name': banana_dealer_name
  }

people_graph = {
  'Tom': ['Ivan', 'Ira', 'Kevin'],
  'Ivan': ['Peter'],
  'Ira': ['Banana_Lin'],
  'Kevin': ['Mary'],
  'Peter': [],
  'Banana_Lin': [],
  'Mary': [],
}

def main():
  searched_res = search_banana_dealer('Tom', people_graph)
  print('Searched list: ', searched_res)
  # print('Banana dealer name: ', searched_res.banana_dealer_name)

if __name__ == "__main__":
    main()
