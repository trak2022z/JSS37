// chaining using .then and .catch
let b = new Promise((resolve, reject) => {
  let number = 2 * 2;
  // let number = 2 * 3;
	if (number === 4) {
		resolve('promise resolved!');
	} else {
		reject('promise rejected');
	}
});

b.then(console.log).catch(console.error);




// constructing a promise - exercise 1 solution
let a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('first promise down!');
  }, 5000);
});

a.then(console.log);




// showing asynchronous code
let c = new Promise((resolve, reject) => {
  setTimeout(() => {
    let number = 2 * 2;
    if (number === 4) {
      resolve('promise resolved!');
    } else {
      reject('promise rejected');
    }
  }, 4000);
});
c.then(console.log).catch(console.error);
console.log("I am below the promise");

