const productnameinputelement = document.getElementById('product-name');

const remainingcharelement = document.getElementById('remaining-chars');

const maxAllowedchars = productnameinputelement.maxLength;


function countchars(event) {
    const enteredtext = event.target.value;
    const enteredtextlen = enteredtext.length;

    const remainingCharacters = maxAllowedchars - enteredtextlen;

    // if (remainingCharacters > 10) {
    //     const spanElement = document.getElementById('remaining-chars')
    //     spanElement.style.color = 'rgb(105, 101, 75)'
    //     const inputElement = document.getElementById('product-name')
    //     inputElement.style.backgroundColor = 'rgb(253, 245, 196)'
    //   }

    remainingcharelement.textContent = remainingCharacters;

    if (remainingCharacters === 0) {
      remainingcharelement.classList.add('error')
      productnameinputelement.classList.add('error')
    }
    else if (remainingCharacters <= 10) {
        remainingcharelement.classList.add('warning')
        productnameinputelement.classList.add('warning')
        remainingcharelement.classList.remove('error')
        productnameinputelement.classList.remove('error')
      }
    else{
      remainingcharelement.classList.remove('warning')
      productnameinputelement.classList.remove('warning')
    }
      
}

productnameinputelement.addEventListener('input', countchars);