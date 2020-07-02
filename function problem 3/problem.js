function letterCount(string, letter) {
    let count=0;
    for(let point=0; point< string.length; point++)
    {
        if( string.charAt(point)==letter)
        {
            count +=1;
        }
    
    }
return count;
}
console.log(letterCount('over the mountain top' ,'o' ));