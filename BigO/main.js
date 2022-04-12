function logItems(n) {
  for(let i = 0; i < n; i++)
    console.log(i);
}

// O(n) operation => We passed the operation n times and it oputued the number of times (n)
// both J and I run n times
// both oupts will b the same
// our code will run n + n times (2n)
// O(2n) operation
// it doesnt matter how many there are if there is a constant you drop it
// O(2n) => 0(n)

function logItems(n) {
  for(let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
    }
  }
}

// 100 items were outputed in the console (dev tools)
// in this case the number of items that were outputed is n*n (n2)
// O(n2)
function logItems(n) {
  for(let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
         console.log(i,j, k);
       }
      }
    }
  }

  // for this you will get 1000 items
  // n * n * n (n3)
  // it doesnt matter how many we still will write as On2 (simplify)

  // The point is if we have 2 diffrent codes that acomplish the same task the O(n) will be better
  // Because it will accomplish it if fewer operations (time complexity)
