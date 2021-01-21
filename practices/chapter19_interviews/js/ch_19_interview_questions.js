function checkIsPrime(num) {
  const rootedNum = num ** 0.5
  for (let factor = 2; factor < rootedNum; factor++) {
    if (rootedNum % factor === 0) {
      return false
    }
  }
  return true
}
function checkPrimeInRange(min, max) {
  let res = []
  for (let numNow = min; numNow <= max; numNow++) {
    const isPrime = checkIsPrime(numNow)
    isPrime && res.push(numNow)
  }
  return res
}

function checkIsPalindrome(word='') {
  let wordArr = word.split('')
  while (wordArr.length > 1) {
    if(wordArr.shift() !== wordArr.pop()) {
      return false
    }
  }
  return true
}

function getGreatestCommonDivisor(num1, num2) {
  res = 1
  factor = 2
  while(factor <= num1 && factor <= num2) {
    if(num1 % factor === 0 && num2 % factor === 0) {
      res = factor
    }
  }
  return res
}
// 輾轉相除法(歐幾里德法)
function enclideanGcd(num1, num2) {
  let _num1 = num1
  let _num2 = num2
  if(_num1 < _num2) {
    [_num1, _num2] = [_num2, _num1]
  }
  while(_num2 !== 0) {
    remainder = _num1 % _num2
    _num1 = _num2
    _num2 = remainder
  }
  return _num1
}

function recursiveEnclideanGcd(num1, num2) {
  return num2 === 0 ? num1 : (
    num1 < num2 ? (
      recursiveEnclideanGcd(num1, num2 % num1)
    ) : (
      recursiveEnclideanGcd(num2, num1 % num2)
    )
  )
}

function getLeastCommonMultiple(num1, num2) {
  return (num1 * num2) / getGreatestCommonDivisor(num1, num2)
}

function countRabbitsAndChicken(heads, foot) {
  let chicken = 0
  while(chicken <= heads) {
    const rabbits = heads - chicken
    if(rabbits * 4 + chicken * 2 === foot) {
      return ({
        rabbits,
        chicken,
      })
    }
  }
  return undefined
}

function makeRowColTableArray(row=1, col=1, initData) {
  const res = [...Array(row)]
    .map(() => (
      [...Array(col)].map(() => initData)
    ))
  return res
}
function dynamicPlanMax(targetWeight=0, weightValueList=[]) {
  const length = weightValueList.length
  let table = makeRowColTableArray(length + 1, targetWeight + 1, { value: 0, pickedPlans: [], })

  for (let i = 0; i < length + 1; i++) {
    for (let weight = 0; weight < targetWeight + 1; weight++) {
      if(i === 0 || weight === 0) {
        table[i][weight] = {
          value: 0,
          pickedPlans: [],
        }
      }
      else if(weightValueList[i - 1].weight <= weight) {
        const prev = table[i - 1][weight].value
        const remainWeight = weight - weightValueList[i - 1].weight
        const next = weightValueList[i - 1].value + table[i - 1][remainWeight].value
        const maxValue = Math.max(prev, next)
        table[i][weight] = {
          value: maxValue,
          pickedPlans: [],
        }

        if(next > prev) {
          const remainWeightPlans = table[i - 1][remainWeight].pickedPlans
          table[i][weight].pickedPlans = [
            ...remainWeightPlans,
            weightValueList[i - 1].name
          ]
        } else {
          table[i][weight].pickedPlans = [
            ...table[i - 1][weight].pickedPlans
          ]
        }
      } 
      else {
        table[i][weight] = {
          ...table[i - 1][weight]
        }
      }
    }
  }
  console.log(table)

  return ({
    bestPlan: table[length][targetWeight],
  })
}
function calcDynamicBestPlan() {
  const weightValueList = [
    {
      'name': 'Mt.A',
      'value': 10,
      'weight': 3
    },
    {
      'name': 'Mt.B',
      'value': 16,
      'weight': 4
    },
    {
      'name': 'Mt.C',
      'value': 20,
      'weight': 3
    },
    {
      'name': 'Mt.D',
      'value': 22,
      'weight': 5
    },
    {
      'name': 'Mt.E',
      'value': 25,
      'weight': 5
    },
  ]
  const res = dynamicPlanMax(10, weightValueList)
  console.log('Best plan: ', res.bestPlan)
}

function main() {
  calcDynamicBestPlan()
}

main()