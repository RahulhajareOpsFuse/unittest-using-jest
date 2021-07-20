function fetchPromise(){
    return new Promise((resolve,reject)=>{
        resolve("hello")
    })
}

module.exports=fetchPromise;