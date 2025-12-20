/*Async await is the shortcut for the promises*/

//code using promises and fetch

function getData(){
    return fetch('url for backend')
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    });
};

getData();

//same code using async/await

async function getDatas(){
    try{

    /*whenever the try gets error it will skip the rest of the code.
    move to catch block.*/

    let response = await fetch('url for backend');

    /*We can create error manually*/
    if(!response.ok){
        throw new Error('Request failed');
        //throw is to make the manual error.
    }

    let data = await response.json();
    console.log(data);
    }
    catch(error){
        console.log('Unexpected error. Please try again');
    }
    //catch is to handle error in async await
}
//await is wait until that line of code get completed.