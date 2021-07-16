John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
 Could you make a program that makes this string uppercase gives it sorted in alphabetical order by last name. When the last names are the same, sort them by first name. 
Last name and first name of a guest come in the result between parentheses separated by a comma.So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"


function sortedNames(s) {
return s.toUpperCase()
  .split(";")
  .map(name=> name.split(":").reverse())
  .sort()
  .map(name => `(${name[0]}, ${name[1]})`)
  .join("")


function sortedNames(str){
let newStr =str.toUpperCase().split(';')
.map(n=>n.split(':').reverse().join(',  ') )
.sort()
.join(')(')
return `(${newStr})`
}
