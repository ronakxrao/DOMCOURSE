//EXAMINE THE DOCUMENT OBJECT
// console.dir(document);
//console.log(document.domain);
//console.log(document.url);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//console.log(document.forms);
//console.log(document.links);

//SELECTORS
//GET ELEMENT BY ID
//console.log(document.getElementById('header-title'));
//var headerTitle =document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerHTML = '<h3>Hello</h3>';
//headerTitle.style.borderBottom = 'solid 3px #000';
//header.style.borderBottom = 'solid 3px #000';

//GET ELEMENTS BY CLASS NAME

var items =document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundcolor = 'yellow';
