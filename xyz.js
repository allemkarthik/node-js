require("/path")

// all the code of the module is wrapped inside a function(IIFE)

// IITE=> immediately invoked function expression

(function(module, require){  //this is iife which is done by node js itself 
    function calmultiply(a,b){    //this is actuall module which we written and export as module and received by using require
        const res=a+b;
        console.log(res);
        
    }
    module.exports={calmultiply};
}())