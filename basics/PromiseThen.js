// Solving Callback Hell with Promises  .then() and 
// Mock asynchronous functions returning Promises

function fetchUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success = Math.random() > 0.5 // just to stimulate 50% failure 
            if(success){
                resolve({id:1,username:"Jhon"})
            }
            else{
                reject("Failed to fetch the user")
            }
        },1000);
    });
}

function fetchOrder(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(userId == 1){
                resolve([{id: 101,order:"Mobile"},
                        {id: 102,order:"Laptop"}]
                )
            }
            else{
                reject("Failed to fetch the Order")
            }
        },1000);
    });
}

function fetchOrderDetails(orderId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(orderId == 101 || orderId == 102){
                resolve({id: orderId , details : `details of ${orderId}`})
            }
            else{
                reject("Failed to fetch OrderDetails")
            }
        },1000)
    })
}

fetchUser()
    .then((user)=>{
        console.log("user fetched : " + JSON.stringify(user))
        return fetchOrder(user.id)
    })
    .then((orders)=>{
        console.log("order fetched : " + JSON.stringify(orders))
        return fetchOrderDetails(orders[0].id)
    })
    .then((details)=>{
        console.log("order Details : " + JSON.stringify(details))
    })
    .catch((errMsg)=>{
        console.log(errMsg);
    })