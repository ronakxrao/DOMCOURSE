//EXAMINE THE DOCUMENT OBJECT
// console.dir(document);
console.log(document.domain);
console.log(document.url);
console.log(document.title);
//document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);

//selectors
// get element by id
//console.log(document.getElementById('header-title'));
var headerTitle =document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerHTML = '<h3>Hello</h3>';
headerTitle.style.borderBottom = 'solid 3px #000';