/*//bitwise operator
//1=00000001
//2=00000010
console.log(1|2);//bitwise or
console.log(1&2);
//00000100 //read
//00000010  write 
//00000001 execute
const readperm=4;
const writeperm=2;
const executeperm=1;

let myperm=readperm|writeperm
console.log(myperm);


let mesg=myperm&executeperm?'yes':'no'
console.log(mesg)*/
//if-else
/*
let hour=10;
if(hour>=6&& hour<12){
    console.log('Good morning🌻')
}
else if(hour>13&&hour<15){
    console.log("Good Afternoon😋😋")

}else if(hour>17&&hour<<19){
    console.log("its snack time🍗🍗")
    console.log("good evening 🌆")
}
else
    console.log("good night💤💤")
*/
//switch-case
/*
let role='guest'
switch (role){
    case 'admin':
        console.log("iam admin")
        break;
    case 'guest':
        console.log("iam a guest user")
        break;
    default:
        console.log("unkown user")
}
*/
//for loooop 

for(let i=0;i<10;i++){
    if(i%2==0)
    {if(i==0)
        continue
    else
    console.log(i,"hello world  🌎");
    
}
}
//do while

i=10
do{
    if(i%2==1)
    console.log(i,"hello beauty 👧")
    i++
}while(i<10)

