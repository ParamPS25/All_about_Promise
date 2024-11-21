function fetchUser(callback){
    setTimeout(()=>{
        callback({id:1,username:"Jhon"})
    },1000)
}

function fetchOrder(userId,callback){
    setTimeout(() => {
        callback([{ id: 101, item: "Laptop" }, { id: 102, item: "Phone" }]);
    }, 1000);
}

function fetchOrderDetails(orderId, callback){
    setTimeout(() => {
        callback({ id: orderId, details: "Order details for " + orderId });
    }, 1000);
};


fetchUser((user)=>{
    console.log("user fetched : " + JSON.stringify(user))
        fetchOrder(user.id,(orders)=>{
        console.log("order fetched : " + JSON.stringify(orders))
            fetchOrderDetails(orders[1].id,(details)=>{
                console.log("order details fetched : " + JSON.stringify(details));
            });
        });
    });

