let string = 'The dog is sleeping on the roof';
const longestWord =(string)=>{
let stringWord = string.split(' ');
const sortedString= stringWord.sort((stringA, stringB)=>{return stringB.length - stringA.length;});
return sortedString[0].length;
}


console.log(longestWord(string));
