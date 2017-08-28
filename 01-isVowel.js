//------------------------------------------------------------------
// TASK:  isVowel()
// Write a function called isVowel() that returns true/false for
//  whether a character is a vowel or not.
//------------------------------------------------------------------

var isVowel = function(inputChar){
	console.log()
	// console.log("LOOK AT ME")
	if(
		  inputChar === 'a' ||
      inputChar === 'e' ||
      inputChar === 'i' ||
      inputChar === 'o' ||
      inputChar === 'u'
	){

			return true;
	} // else {
	// 	return false
	// }

	return false;
	//OUTPUT : boolean (true/false)
}

console.assert(isVowel('x') === false);
console.assert(isVowel('e') === true);
console.assert(isVowel('o') === true);
console.assert(isVowel('n') === false);
console.assert(isVowel('I') === true);
console.assert(isVowel('y') === false);
