let paragraphElement = document.querySelector('p');

function changetextElement() {
    paragraphElement.textContent = 'clicked';
    console.log('clicked1');
    console.log('clicked2');
}
paragraphElement.addEventListener('click', changetextElement);

let inputElement = document.querySelector('input');

function retrieveinfo() {
    let enteredtext = inputElement.value;
    console.log(enteredtext);
}

inputElement.addEventListener('input', retrieveinfo);