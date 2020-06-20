var rect = require('./rect');

function calc(l,b){
    console.log("Solving for rectangle with l = "
                + l + " and b = " + b);
    rect(l,b, (err,rect) => {
        if (err) {
	        console.log("ERROR: ", err.message);
	    }
        else {
            console.log("area rectangle dimensions l = " + l + " and b = " + b + " is " + rect.area());
            console.log("perimeter rectangle dimensions l = " + l + " and b = " + b + " is " + rect.perimeter());
        }
    });
    console.log("This statement after the call to rect()");
};

calc(-4,5);