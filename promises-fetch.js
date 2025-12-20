/* Promises is to overcome the problems in callback function*/

let promise  = new Promise((resolve) => {
    console.log('step 1');

    setTimeout(()=>{
        console.log('step 2 finished');
        /* Resolved will called after the asynchronous code get complete.*/
        resolve();
    },2000);
});
/*then wait until the resolve called. So easy to work on nested asynchronous code*/
promise.then(()=>{
    console.log('step 3');
}).catch(()=>{
    console.log('Unexpected error. Please try again');
});
//catch is to handle the error in the promise.

/* OUTPUT 
    step 1
    wait for 2 seconds
    step 2 finished
    step 3
*/

/*Fetch - easy to get the http request and response*/
/*Instead of creating let xmr = new XMLHttpRquest();*/


fetch("url link of the backend").
// Get the products data from backend and stored as response
then((response)=>{
    return response.json();
    //converting that response as json data and returning it.
})
.then((products)=>{
    //after converting the data printing it
    console.log(products);
})
.catch(()=>{
    console.log(error);
})