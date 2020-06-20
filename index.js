var rect = require('./rect');

function calc(x,y){

    console.log("rectangle area:" +rect.area(x,y));
    console.log("rectangle perimeter:" +rect.perimeter(x,y));
}

calc(4,5);