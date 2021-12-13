Next.js project 


```js
type ItemType = '0' | '1'

function findLongestSequence(arr: ItemType[]) {
  let longestSequenceCount = 0
  let actualSequenceCount = 0

  arr.forEach(el => {
    if (el === '1') actualSequenceCount = 0
    else actualSequenceCount++
    if (longestSequenceCount < actualSequenceCount) longestSequenceCount = actualSequenceCount
  })

  return Array.from({ length: longestSequenceCount }, () => '0')
}

function sortByLongestSequence(arr: ItemType[]) {
  let sequencesArr = []
  let actualSequence = [arr[0]]

  for(let i = 1; i < arr.length+1; i++){
    if(arr[i-1] === arr[i]) actualSequence.push(arr[i])
    else {
      sequencesArr.push(actualSequence)
      actualSequence = [arr[i]]
    }
  }

  return sequencesArr.sort((a,b) => a.length - b.length)
}

const a: ItemType[] = ['1', '0', '0', '0', '0', '1', '1', '0', '1', '0', '0', '0', '0', '1']

console.log(findLongestSequence(a))
console.log(sortByLongestSequence(a))
```
