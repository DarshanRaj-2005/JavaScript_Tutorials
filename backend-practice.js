let xhr = new XMLHttpRequest(); /*Create a new HTTP message
 to send to the backend*/



/* we can get the response from the internet using xhr.response 
 but now it is undefined because the response we will get only after 
 the request we sent and get response. so use event listener*/

 xhr.addEventListener('load',()=>{
    console.log(xhr.response);
 });
/*Now event listener will wait until the response load after that
 it will print.*/



 xhr.open('GET', 'url link'); /*GET is to get data*/
 
/*First parameter is to say what we want to do. 
 Second parameter is the url for where we want to communicate.*/

 xhr.send();
/*is to send the request*/
