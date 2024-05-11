

function isLasndscape(width,height){
    return (width>height);
}
console.log(isLasndscape(4,15))


function fizzBuzz(input)

{   if(typeof input!=='number')
        return NaN
    if(input%3===0&&input%5===0)
        return "FizzBuzz"
    if(input%3===0)
        return 'Fizz'
    if(input%5===0)
        return "Buzz"
    return input
}

for(let i=1;i<=15;i++)
{
output=fizzBuzz(i)
console.log(output)
}
console.log(checksped(77))
function checksped(speed){
if(speed<=70)
    return "ok"

else if(speed>=130)
    return "License Cancelled"

else
    point=Math.floor(speed/5)
    point=point-14
    console.log('points',point)
}

const arr=[0,null,undefined,'',2,3]
let count=0
for(let val of arr){
    if(val)
{    console.log(val)
    count++
}
}
console.log(count)
*/
//objects


const movie={title:'paramathma'
,releaseYear:2012
,rating:9.9
,actor:"Puneeth"}
//for of loop
for(let key in movie){
    if(typeof movie[key]=='number')
    console.log(key,movie[key])
}


marks=[40,30,49]
function calculategrd(marks){
    const avg=calculateavg(marks)
    if(avg<60) return 'F';
    if(avg<70) return 'D';
    if(avg<80) return 'C';
    if(avg<90) return 'B';
    if(avg<100) return 'A';
}
function calculateavg(array){
    let sum=0
    for(val in array){
        sum+=val
    }
    return sum/array.length;
}

console.log(calculategrd(marks))
