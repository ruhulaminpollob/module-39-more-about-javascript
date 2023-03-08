const getData = new Promise((resolve, reject) => {   
    const num=Math.random()*10
    if (num < 5) {
        resolve(num)
    } else {
        reject('No Data Found')
    }
})

getData
    .then(data => console.log(data))
    .catch(err => console.log(err))