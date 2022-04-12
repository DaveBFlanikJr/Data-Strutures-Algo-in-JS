// Droping non- dominants is another way to simplify BigO

function logItems(n) {
  for(let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  for(let k = 0; k < n; k++) {
    console.log(k);
  }
}

// when these are added together it becomes O(n2 + n)
// n2 is the dominant and n is the non
// so we remove it O(n2 + n) => O(n2)
