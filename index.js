console.log("working");

//An example of pure function.
function area(r){
    let area = 3.14*r*r;
    console.log(area);
}
area(3);


// An example of Promise Chaining.

 let p = new Promise((resolve, reject) => {
     setTimeout(() => { resolve(10); }, 3 * 100); });
      p.then((result) => { console.log(result); 
         return result * 2; })
          p.then((result) => { 
            console.log(result); 
          })

//  An example of Arrow Function  .

 let x = function(x, y) { 
    return x * y; 
}


// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();