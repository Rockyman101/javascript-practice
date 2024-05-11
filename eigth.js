/*const circle={
    radius:1,
    draw(){
        console.log('draw');
    }
};
const another={};
for(let key in circle){
    another[key]=circle[key];
}
console.log(another);    
place='kudlugate'
first_name='raghvendra'
const message=`hi ${first_name} this\nis 'bangalore' and ur place is located near ${place}`
console.log(message)
const now=new Date()
now.setFullYear(2023);
let adress={
    city:'bangalore',zip:560068,
    street:'kudlugate'
};
function iterateobj(adress){
for (let key in adress)
console.log(key,"=" ,adress[key]);}
console.log(iterateobj(adress))
//factory func
let address=createaddr('bangalore',788870,'garvepalya');
function createaddr(city,zip,street){
    return {city,zip,street
};}
//constructor func
let adddress=new createadddr('bangalore',788870,'silkboard')
function createadddr(city,zip,street){
    this.city=city;
    this.zip=zip;
    this.street=street;
}
console.log(adddress)
let adddress2=new createadddr('bangalore',788870,'silkboard')
console.log(areEqual(adddress,adddress2))
console.log(areSame(adddress2,adddress))
function areEqual(adddress,adddress2){return adddress.street===adddress2.street&&adddress2.zip===adddress.zip&&adddress2.city===adddress.city}
function areSame(adddress,adddress2){return adddress2===adddress}*/
//blog
/*const blog={title:'`aman` ki patshaala',
body:'comedy',
author:'hisfather',
views:200000,
comments:[
{author:'abc',body:'lovley'}
,{author:'xyz',body:'fantastic'}],
isLive:true
};

let post=new posT('bb ki vines','tanmay','comedy')
    
function posT(title,author,body){
    this.title= title
    this.author=author
    this.body=body
    this.comments=[]
    this.views=0
}
console.log(post)

run=function(){
    console.log('run')
}
run()*/
function sum(){
    let total=0;
    for(let value of arguments)
        total+=value;
return total;
}
console.log(sum(1,33,34,2,12,42))
