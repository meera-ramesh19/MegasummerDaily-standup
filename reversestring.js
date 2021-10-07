

Reversestring.js

// Complete the solution so that it reverses the string passed into it.
function reverseStr(str){
//   return str.split('').reverse().join('')
  let newStr = ''
  for(let i = str.length - 1; i>=0;i--){
    newStr += str[i]
  }
  return newStr
}

console.log(reverseStr('world'), 'dlrow')
console.log(reverseStr('racecar'), 'racecar')
console.log(reverseStr('spongebob'), 'bobegnops')
