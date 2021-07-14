



Write a function checkForImposterSyndrome(str) that returns true if str contains 'not ready' or "can't interview yet", otherwise false

function checkForImposterSyndrome(str){
 let str=str.toLowerCase()
 return str.includes('not ready') || str.includes( "can't interview yet"))?true:false
}
