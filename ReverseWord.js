ReverseWord


Given a string of charactersas input, write a function that returns it with the characters reversed.
No Reverse method (well brute force it first , but then no reverse method)


function reverseWord(str){
  
   let newStr=''
   for (let char of str){
       newstr=char+newStr
   }
  return newStr
}
