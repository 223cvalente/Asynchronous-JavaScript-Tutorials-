// //console.log(1);
// console.log(2);


//1st video setTimeout(() => {

//   console.log('callback function fired');
  
// }, 2000);

// console.log(3);
// console.log(4);

const getTodos = (callback) => {
const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
//console.log(request, request.readyState);
  if(request.readyState === 4 && request.status  === 200){
  const data = JSON.parse
    callback(undefined, request.responseText);
  } else if (request.readyState === 4){
   callback('could not fetch data');
  }
});
request.open('GET', 'todos.json'); 
request.send();

  };
console.log(1);
console.log(2);
getTodos((err, data) => {
 console.log('callback fired');
  console.log(err, data);
  if (err){
    console.log(err);
  } else{
    console.log(data);
  }
});
console.log(3);
console.log(4);
