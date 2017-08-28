//------------------------------------------------------------------
// TASK:  totals10()
// Write a function called totals10() that accepts 2 arguments
//  and returns true/false if the 2 values are equal to 10.
//------------------------------------------------------------------

function totals10(){
  
}

// Normal
console.assert(totals10(5, 5) === true);
console.assert(totals10(5, 10) === false);
console.assert(totals10(4, 5) === false);
console.assert(totals10(-4, 14) === true);

// Adventure
console.assert(totals10(10) === null);
console.assert(totals10(8, '2') === null);
console.assert(totals10(false, 10) === null);
