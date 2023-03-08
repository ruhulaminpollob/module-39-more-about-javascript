console.log(1);
console.log(2);
setTimeout(()=>{
    console.log('lazy log');
},4000)
console.log(4);


function doSomeThing() {
    console.log(3);
}