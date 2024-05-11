//function exprx
function walk(){
    console.log('walk');
}
walk();
//anonymous func expr
run=function(){
    console.log('runnn')
}
run();
let move=run;

move();
let total=0;
//using arguments keyword
function sum(a,b){
    for(let value of arguments)
    total+=value
    return total
}
console.log(sum(1,2,3,2,5,8,9))


function difference(...args)
{   return args.reduce((a,b)=>a-b);
}
console.log(difference(1,2,3,4));
//rest operator
function discountCalc(disc,...prices)
{
    const totall=prices.reduce((a,b)=>a+b);
    console.log(totall)
    const sum=totall
    return(totall*(100-disc)/100)    
}

console.log(discountCalc(20,1200,700,100))

function intrestCalc(principal,rate,years){
    rate=rate||3.5
    years=years||5
return principal*rate*years/100
}
console.log(intrestCalc(20000))
person={
firstName:'jon',lastname:'snow',
get fullname(){
    return `${person.firstName} ${person.lastname}`},
set fullname(value){
    if(typeof(value)!=='string')
    {throw new error('Value is not a string');
}
    const parts=value.split(' ');
    this.firstName=parts[0]
    this.lastname=parts[1]
}
};
try
{
    person.fullname=null
}
catch(e)
{
    //alert("value is not a  string ")
}
console.log(person)   
let st='apple'
console.log(st.replace('ple','pel'))
console.log(st.toUpperCase())
console.log(st.split('p'))
let arr=new Array('app','webapp','website','ngrok')
arr.push('wireshark')
console.log(arr.pop())
for(item of arr){
console.log(item)}
