/**
 * makeFullNamesList()
 *
 * Write a function called `makeFullNamesList` that takes an array
 * of objects with first and last names properties and returns
 * an array of strings, where each string is a full title + first & last
 * name.
 *
**/


// ++ YOUR CODE HERE


// entraun array de objetos con first y lastname
// tomar el genero y mr para male y mrs para female
// juntar genero + firstname + lastname
// sale array de strings con nombre concatenado


function makeFullNamesList(arrObjs){
//  console.log(arrObjs);
  let arrStr = [ ]

  // let arrGender= arrObjs
  // console.log(arrGender);
  for(var i = 0; i < arrObjs.length; i++){
  //  console.log(arrObjs[0].gender);
  let arrGender = arrObjs[i].gender
    if(arrGender === 'female'){
      let femaleFull = 'Mrs.' + ' ' + arrObjs[i].first + ' ' + arrObjs[i].last
      arrStr.push(femaleFull)
  //  console.log(femaleFull);
  } else if (arrGender === 'male'){
      let maleFull = 'Mr.' + ' ' + arrObjs[i].first + ' ' + arrObjs[i].last
      arrStr.push(maleFull)
  //  console.log(maleFull);
    }
  }

  console.log(arrStr);
  return arrStr

}





// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
//
console.group('ex-05');
  console.log('%cFunction: makeFullNamesList', 'background-color: green; color: white')
console.groupEnd();

var customersList = [
    { first: 'Joe', last: 'Blogs', gender: 'male'},
    { first: 'Kate', last: 'Smith', gender: 'female'},
    { first: 'Dave', last: 'Jones', gender: 'male'},
    { first: 'Jacky', last: 'White', gender: 'female'}
]

var moreCustomersList = [
	{ first: 'Ruby', last: 'Scooby', gender: 'female'},
	{ first: 'Jen', last: 'Vin', gender: 'female'},
	{ first: 'Dan', last: 'Theman', gender: 'male'},
]


var fullNamesList1 = makeFullNamesList(customersList)
var moreNamesList = makeFullNamesList(moreCustomersList)


/* ----------------------- TEST-1  ----------------------- */
// Function returns an array of strings
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert(Array.isArray(fullNamesList1) === true)
console.assert(typeof fullNamesList[0] === 'string')

console.assert(Array.isArray(moreNamesList) === true)
console.assert(typeof moreNamesList[1] === 'string')


//* ----------------------- TEST-2  ----------------------- */
// Each string element in returned array is formatted
//    '«Gender-Title» «First-Name» «Last-Name»'
/* ------------------------------------------------------ */
console.log('TEST-2');

console.assert(fullNamesList1.indexOf("Mr. Joe Blogs") >= 0)
console.assert(fullNamesList1.indexOf("Ms. Kate Smith") >= 0)
console.assert(fullNamesList1.indexOf("Ms. Jacky White") >= 0)


console.assert(moreNamesList.indexOf("Ms. Ruby Scooby") >= 0 )
console.assert(moreNamesList.indexOf("Mr. Dan Theman") >= 0 )
