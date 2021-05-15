function doSomething (){
    console.log(3333);
}

console.log(2222);
setTimeout(doSomething, 1000);
setTimeout(function(){
    console.log('lazy and waiting ');
}, 2000)
console.log(4444);
setInterval(() => {
    console.log('doing it again');
}, 4000);