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
    let response = await fetch('url for backend');
    let data = await response.json();
    console.log(data);
}
//await is wait until that line of code get completed.