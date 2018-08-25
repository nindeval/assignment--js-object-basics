/**
 * createHtmlElement()
 *
 * Write a function called `createHtmlElement` that takes an object
 * as argument and returns a simple formatted HTML string.
 *
 * var exampleHtmlObj = {
 *   element: 'h1',
 *   classNames: 'grid small-section',
 *   textContent: 'Lorem ipsum dolor sit amet.'
 * }
 *
 * createHtmlElement(htmlObj)
 *  => '<h1 class="grid small-section">Lorem ipsum dolor sit amet.</h1>'
*/


// ++ YOUR CODE HERE



function createHtmlElement(obj){
// console.log(obj.element + obj.classNames + obj.textContent);
// console.log('<'+ obj.element + ' ' + 'class="'+ obj.classNames + '">' + obj.textContent + '</' + obj.element + '>');

  let phrase = '<'+ obj.element + ' ' + 'class="'+ obj.classNames + '">' + obj.textContent + '</' + obj.element + '>'

  return  phrase

}





console.log('++++++++++');
let objExample = {
  element: 'span',
  textContent: 'bleh',
  classNames: 'featured-section'
}

const ejercicio01 = createHtmlElement(objExample)
console.log(ejercicio01);

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-01');
  console.log('%cFunction: createHtmlElement', 'background-color: green; color: white')
console.groupEnd();

var exampleObj1 = {
  element: 'p',
  textContent: 'This is so freaking cool!',
  classNames: 'featured-section'
}

var exampleObj2 = {
  element: 'h2',
  textContent: 'Bill Brasky',
  classNames: 'ui-card-title'
}

var exampleObj3 = {
  element: 'span',
  textContent: 'This is an important message.',
  classNames: 'highlight text-important'
}


/* ----------------------- TEST-1  ----------------------- */
// Function takes object w/ `element`, `textContent`, `classNames` properties
//   returns properly formatted html string
/* ------------------------------------------------------ */
console.log('TEST-1');

var htmlString1 = createHtmlElement(exampleObj1)

console.assert(htmlString1 === '<p class="featured-section">This is so freaking cool!</p>')

/* ----------------------- TEST-2  ----------------------- */
// Function takes object w/ `element`, `textContent`, `classNames` properties
//   returns properly formatted html string
/* ------------------------------------------------------ */
console.log('TEST-2');

var htmlString2 = createHtmlElement(exampleObj2)

console.assert(htmlString2 === '<h2 class="ui-card-title">Bill Brasky</h2>')


/* ----------------------- TEST-3  ----------------------- */
// Function takes object w/ `element`, `textContent`, `classNames` properties
//   returns properly formatted html string
/* ------------------------------------------------------ */
console.log('TEST-3');

var htmlString3 = createHtmlElement(exampleObj3)

console.assert(htmlString3 === '<span class="highlight text-important">This is an important message.</span>')

/* ----------------------- END  ----------------------- */
console.log('\n')
