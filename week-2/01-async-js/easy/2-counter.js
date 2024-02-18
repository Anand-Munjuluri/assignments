
function counter(n){
    function printValue(n){
        console.log(n);
setTimeout(()=>{
    printValue(n+1);
},1000);
}
printValue(n)
}

counter(1)