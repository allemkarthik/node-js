let a=1203433;
let b=2341411;

setTimeout(()=>{
    console.log("call ASAP");
    
},0)

function multiply(a,b){
    let res=a*b;
    return res
    
}
var c=multiply(a,b)
console.log("multiplication is",c);
