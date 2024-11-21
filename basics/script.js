// ************************************************************************************************************************************************

        // Promise.then((result)=>{})
        // Promise.catch((err)=>{})            // this can be chained 
        // as fetch returns a Promise that resolves when the request completes.


        //  fetch("https://fakestoreapi.com/products/3")
        //     .then(res=>res.json())
        //     .then(json=>console.log(json))
        //     .catch((e)=>{console.log("ops somethign wrong error "+ e)})


const fetchFn = async function(x,y){
    const ans = await fetch("https://fakestoreapi.com/products/3");
    console.log("will run after await");
    // console.log("ans is : " + ans);         // ans is : [object Response] 
    // console.log("ans is : " + ans.json())   //ans is : [object Promise]
    // const finalAns = ans.json();
    // console.log(finalAns)                   // Promise {}
    // Without await, finalAns will log a Promise object rather than the actual JSON content.
    //Important: ans.json() itself is asynchronous and returns a Promise. You need to await it to get the actual parsed data.
    const finalAns = await ans.json();
    console.log(finalAns);
}

fetchFn(4,5);
console.log("written at last but will run first");
//This line is logged immediately because fetchFn is asynchronous and does not block the main thread. The console statement here is outside the fetchFn function, so it executes before the asynchronous fetch completes.         

// ************************************************************************************************************************************************************************************************************************************
// The resolve function is key to fulfilling the Promise. It:
// Transitions the Promise's State:
// From pending to fulfilled.
// Provides the Promise's Value:
// The value passed to resolve is made available to .then() or await.
// Without resolve, the Promise would remain in the pending state forever, and the calling code would never know that the operation has completed.

// const fetchUser = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             // resolve("resolved...yay");         or
//             // resolve({alright : "i am good"})   or
//             // resolve({
//             //   id:1,
//             //   name:"jhon",
//             //   city:[{
//             //     aa:"AA",
//             //     bb:"BB",
//             //   },{
//             //   cc:"CC",
//             //   dd:"DD"
//             //   }]
//             // })
//         }, 1000);
//     });
// };

// fetchUser()
//     .then((user) => {
//          const ans = user.city[1]
//         console.log("User fetched:", ans);
//         console.log(typeof(user));
//     })

// *************************************************************************************************************************************************************************************************************


