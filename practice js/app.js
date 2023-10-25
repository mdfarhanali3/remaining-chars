// console.dir(document);

// document.body.children[1].children[0].href = 'http://google.com';

let anchorelement = document.getElementById("external-link");
anchorelement.href = 'http://twitter.com';

let newElement = document.createElement("a");
newElement.textContent = "this is link";
newElement.href = 'http://google.com';


let paragraphElement = document.querySelector('p');
paragraphElement.append(newElement);

let removing = document.querySelector('h1');
removing.remove();

paragraphElement.parentElement.append(paragraphElement);

paragraphElement.innerHTML = "This is <strong>important!</strong>";