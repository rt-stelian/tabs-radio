function findBestMatch(num, arr) {
  return arr.reduce((bestMatch, element) =>
    // Compare absolute differences between the current element and num.
    Math.abs(element - num) < Math.abs(bestMatch - num) ? element : bestMatch
  )
}

const K = 22
const ARR = [10, 15, 18, 24, 38]
const bestMatch = findBestMatch(K, ARR)
console.log(bestMatch)
