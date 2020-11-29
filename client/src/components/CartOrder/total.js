export const total = (arr) => {
    let t = 0;

  for (let i = 0; i < arr.length; i++) {

    t += arr[i].quantity*arr[i].price
  }
  return t;
}


export const cantidad = (arr) => {
  let a = 0;

for (let i = 0; i < arr.length -1 ; i++) {

  a += arr[i].quantity + arr[i + 1].quantity
}
return a;
}
