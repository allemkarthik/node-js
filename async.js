const fs=require("fs")
const https=require("http")
console.log("hello");

let a=1203433;
let b=2341411;

https.get("http://dummyjson.com/products/1", (res)=>{
    console.log("fetched succesfully");
    
});

setTimeout(()=>{
    console.log("timeout will call after 5 seconds");
    
},5000)

fs.readFile("./file.txt","utf-8",(err,data)=>{
    console.log("file data:", data);
    
})
function multiply(a,b){
    let res=a*b;
    return res
    
}
var c=multiply(a,b)
console.log("mul is ",c);