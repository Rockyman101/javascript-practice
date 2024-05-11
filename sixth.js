/*function stars(rows){
    for(let i=0;i<rows;i++){
        pattern=""
        for(let j=0;j<=i;j++)
            pattern+="*"
        console.log(pattern)
        
    }
}ww
stars(5)
*/
function showprime(limit){

    for(i=2;i<=limit;i++)
        {   isprime=true;
        for(j=2;j<i;j++)
        {   if(i%j===0)
            {    isprime=false;
                break;
            }
        }
    if(isprime){console.log(i)}
        }      
}
showprime(20)

