function fetchUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success = Math.random() > 0.5  // lets us stimulate 50% chance of failure

            if(success){
                resolve({id: 1 , username: "John"})
            }
            else{
                reject("Failed to fetch user")
            } 
        },1000)
    })
  }

  fetchUser()
    .then((user)=>{
    //  console.log('User fetched : '+ user)
    // console.log(`User fetched: ${user}`);
    //JavaScript converts objects to the string representation [object Object] when you try to concatenate them with strings.
    console.log("User fetched: " + JSON.stringify(user));
    })
    .catch((error) => {
        console.error("Error:", error); // Handles rejection
    });

// **********************************************************************************************************************************************
