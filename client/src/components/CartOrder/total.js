export const total = (arr) => {
    let t = 0;
  for (let i = 0; i < arr.length; i++) {

    t += arr[i].quantity*arr[i].price
  }
  return t;
}