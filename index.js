/**
* randomInt:
* Returns a random positive integer from min to max
* @Parameters: min - the smallest possible number, max - largest possible number
* @Return: Int
* @Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function randomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/* This example shows how to get a random number from 1 to 10. */
const example = randomInt(1, 10)
// Check the console to see the result.
console.log('Random Number', example)

const array = []

for (let i = 1; i <= 100; i++) {
  num1 = randomInt(0, 6)
  num2 = randomInt(0, 6)
  array.push(`<div class="domino">`)
  array.push(`<div class = dots dots-${num1}>`)
  for (let j = 0; j < num1; j++) {
    array.push(`<div class="dot"></div>`)
  }
  array.push('</div>')
  array.push(`<div class = dots dots-${num2}>`)
  for (let j = 0; j < num2; j++) {
    array.push(`<div class="dot"></div>`)
  }
  array.push('</div>')
  array.push('</div>')
}

console.log(array)

const $domino = document.querySelector('.dominoes')
$domino.innerHTML = array.join('\n')
