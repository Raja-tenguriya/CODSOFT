
let result = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (element) => {
        if (element.target.innerHTML == '=') {
            result = eval(result);
            document.querySelector('#input-items').value = result;
        }
        else if (element.target.innerHTML == 'C') {
            result = ""
            document.querySelector('#input-items').value = result;
        }
        else {
            console.log(element.target);
            result = result + element.target.innerHTML;
            document.querySelector('#input-items').value = result;
        }
    })
})
