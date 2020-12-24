def inputKeyGetValue():
  obj = {
    'emergency': 119,
    'fire': 119,
    'police': 110
  }
  key = input('Input call: ')
  if(key in obj):
    print('Phone number: ', obj[key])
  else:
    print('Call empty')

def vote_someone(voted_dict={}):
  voter_name = input('Input your name: ')
  if(voter_name in voted_dict):
    print('Your voted result: ', voted_dict[voter_name])
  else:
    voter_choice = input('Input your choice: ')
    voted_dict[voter_name] = voter_choice

vote_commands = {
  'show_result': 'show_result',
  'S': 'show_result',
  'R': 'show_result',

  'next_vote': 'next_vote',
  'N': 'next_vote',

  'exit': 'exit',
  'E': 'exit',
}

def get_vote_result(voted_dict={}):
  voted_result = {}
  for voter_name in voted_dict:
    voter_choice = voted_dict[voter_name]
    if not voter_choice in voted_result:
      voted_result[voter_choice] = 1
    else:
      voted_result[voter_choice] = voted_result[voter_choice] + 1
  return voted_result

def vote():
  voted_dict = {}
  command = ''
  should_continue_voting = True

  if not voted_dict:
    vote_someone(voted_dict)
  while should_continue_voting:
    command_key = input('Input command: ')
    if command_key in vote_commands:
      command = vote_commands[command_key]
      if command == vote_commands['show_result']:
        print('Result now: ', get_vote_result(voted_dict))
      elif command == vote_commands['next_vote']:
        vote_someone(voted_dict)
      elif command == vote_commands['exit']:
        should_continue_voting = False
      else:
        should_continue_voting = False
    else:
      print('Command is invalid, voting close.')
      should_continue_voting = False
  print('Vote is finnished, there is result below.')
  voted_result = get_vote_result(voted_dict)

  if not voted_result:
    print('No one vote :(')
  else:
    print(get_vote_result(voted_dict))

def main():
  # inputKeyGetValue()
  vote()

if __name__ == "__main__":
    main()