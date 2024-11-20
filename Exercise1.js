/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" when the promise completes after 3 seconds

    HINT: Use setTimeout for the delay
*/


function getResult(millisec) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Program complete");
        }, millisec);

    });
}

console.log("Program started")
let result = getResult(3000)
console.log(result);
console.log("Program in progress");

result.then((message) => console.log(message))
    .catch((err) => console.log(err));

