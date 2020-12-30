def hanoi(n, source, aux, target):
  if n == 1:
    # 結束移動
    print('Move {} from {} to {}'.format(n, source, target))
  else:
    # 從來源移到輔助
    hanoi(n - 1, source, target, aux)
    print('Move {} from {} to {}'.format(n, source, target))
    # 從輔助移到目標
    hanoi(n - 1, aux, source, target)

def main():
  hanoi(3, 'A', 'B', 'C')

if __name__ == "__main__":
    main()
