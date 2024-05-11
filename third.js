//factorial calculator
function fact(num)
{
    if(num==1)
    return num
    else
    return num*fact(num-1)

}
let x=fact(5)
console.log(x);
console.log("pre increment %d post increment %d",++x,x++);//increment operator
console.log(x);

y=1;
console.log(y=='1');//loose equality irrespective of type and val
console.log(y==='1');//strict equality type and value

let points=110;
let type=points>100?'gold':'silver';
console.log(type);
console.log(false ||false);//OR operator
console.log(true &&false);//anD operatOr
console.log(true!=true);//noT operator


//operator and non-booleans

//Falsy  anything that is not falsy is Truthy
x=false||'mosh'
console.log(x)
y=true||'mosh'
console.log(y)
s='mosh'||'sid'//returns the leftmost thing
console.log(s);
p='mosh'&&'sid'//returns right most thing
console.log(p);
//undefined
//null
//0
//false
//''
//NaN
let u='red';
let r='blu';
console.log(u,r);
    let temp;
    temp=u;
    u=r;
    r=temp;

console.log(u,r);
