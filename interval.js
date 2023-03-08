let num=0;
const intervalId= setInterval(()=>{
    num++
    console.log(num);

    if (num===10) {
        clearInterval(intervalId)
    }
},1000);

