/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Program complete" if the promise fulfills
    6. Print out "Program failure" if the promise rejects

    HINT: Use setTimeout for the delay
*/


function getResult(delay,cancelTime){

    return new Promise((resolve,reject)=>{

        let timeoutId = setTimeout(()=>{

                resolve("Task Completed");
            
        },delay);

        cancelTime.cancel = ()=>{

            clearTimeout(timeoutId);
            reject("Program failure");
        }
    });
}

const cancelTime = {};

console.log("Program started")
const output = getResult(3000,cancelTime);
console.log(output);
console.log("Program progress");

output.then((message)=>{
    console.log(message);
}).catch((err)=>{
    console.log(err);
})


setTimeout(()=>{
    cancelTime.cancel();
},2000)