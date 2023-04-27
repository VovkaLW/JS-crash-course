function get_Promise(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}
get_Promise("It worked!", 3000)
  .then((result) => {
    console.log(result); // виведе "Hello, World!" після 1 секунди затримки
  });

  function calc_Arr_Product(arr) {
    return new Promise((resolve, reject) => {
      const allNumbers = arr.every((num) => typeof num === 'number');
      if (allNumbers) {
        const product = arr.reduce((acc, curr) => acc * curr, 1);
        resolve(product);
      } else {
        reject('Error! Incorrect array!');
      }
    });
  }

calc_Arr_Product([2, 3, 4, 5])
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); // Output: 120

calc_Arr_Product([1, 2, '3', 4, 5])
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); // Output: Error! Incorrect array!
