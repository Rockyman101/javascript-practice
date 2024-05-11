//objects factory function
function drawCircle(radius){
    return{
        radius,
        draw()
        {
            console.log('draw');    
        }
    };
}

const circle0=drawCircle(1);

console.log(circle0);
//constructor fn

function createCircle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw0')}
}
const corlc =new createCircle(7)
const sqr={side:2};
sqr.perim=function(){}
sqr.area =function(side){return side*side}
sqr.color='red';
delete sqr.area
console.log(sqr)

