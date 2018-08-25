/**
 * createListOfObjects()
 *
 * Write a function called createListOfObjects that accepts an
 * an array of strings with first and last names and returns
 * an array of objects that each have the property `firstName`
 * and `lastName` and first name and last name values
 * corresponding value
 *
 * var namesList = ['Cameron Betts', 'Shana Lopez', 'Angela Li']
 *
 * createListOfObjects(namesList)
 *  =>
 *  [
 *     { firstName: 'Camer', lastName: 'Betts'},
 *     { firstName: 'Shana', lastName: 'Lopez'},
 *     { firstName: 'Angela', lastName: 'Li'}
 *  ]
 *
 * HINT: You might be able to reuse some of the logic from createNameObject()
*/


// entra un array de strings con fistname y last name
// parto cada string del array
// sacar cada string y asignarlo a una propiedad y regresarlo como objeto
// sale array de objetos con propiedades de fistname y lastname con sus respectivos valores



// ++ YOUR CODE HERE

function createListOfObjects(arrStr){
  let arrObjs = [ ]
  //  console.log(arrStr[0].split());
  //     let cutStr = arrStr[0].split(' ')
  //console.log(cutStr);
  //console.log(cutStr[0]);

  for(var i = 0; i < arrStr.length; i++){
  //console.log(arrStr[i].split(' '));
    let indArr = arrStr[i].split(' ')
    // console.log(indArr[0]);
    arrObjs.push({
        firstName : indArr[0],
        lastName : indArr[1]
      })

    // console.log( '**********');

  }
  console.log(arrObjs);
  return arrObjs
}








// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
console.group('ex-06');
  console.log('%cFunction: createListOfObjects', 'background-color: green; color: white')
console.groupEnd();


var realNinjas = [
  'Chuck Norris',
  'Jackie Chan',
  'Lucy Liu',
  'Billy Blanks',
  'Michelle Yeoh',
  'Jet Li'
]

var realSportsStars = [
	'Kenny Powers',
	'Ricky Vaughn',
	'Dottie Hinson',
	'Jesus Shuttlesworth',
	'Scotty Smalls'
]


var ninjaListOfObjects = createListOfObjects(realNinjas)
var sportStarsListOfObjects = createListOfObjects(realSportsStars)

/* ----------------------- TEST-1  ----------------------- */
// Function returns an array of objects
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert(Array.isArray(ninjaListOfObjects) === true)
console.assert(typeof ninjaListOfObjects[0] === "object")


//* ----------------------- TEST-2  ----------------------- */
// Each object element of array has `firstName` + `lastName`
//    properties
/* ------------------------------------------------------ */
console.log('TEST-2');

// createListOfObjects(realNinjas)
console.assert(ninjaListOfObjects[0].firstName === "Chuck")
console.assert(ninjaListOfObjects[0].lastName === "Norris")

console.assert(ninjaListOfObjects[1].firstName === "Jackie")
console.assert(ninjaListOfObjects[1].lastName === "Chan")

console.assert(ninjaListOfObjects[3].firstName === "Billy")
console.assert(ninjaListOfObjects[3].lastName === "Blanks")



// createListOfObjects(realSportsStars)
console.assert(sportStarsListOfObjects[1].firstName === "Ricky")
console.assert(sportStarsListOfObjects[1].lastName === "Vaughn")

console.assert(sportStarsListOfObjects[3].firstName === "Jesus")
console.assert(sportStarsListOfObjects[3].lastName === "Shuttlesworth")
