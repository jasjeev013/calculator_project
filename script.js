let buttons = document.querySelectorAll('.js-number');
let display = document.querySelector('.js-display-exp');
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click',()=>{
        display.value += button.dataset.number;
    });
}

let clearAll = document.querySelector('.js-clearall');
clearAll.addEventListener('click', () => {
    display.value='';
});

let clear = document.querySelector('.js-clear');
clear.addEventListener('click',()=>{
    display.value=display.value.slice(0, -1);
});

let calculate = document.querySelector('.js-calculate');
calculate.addEventListener('click',()=>{
    try {
        let result = eval(display.value);
        if (!isNaN(result)) {
            display.value = String(result);
        } else {
            throw new Error("Error");
            display.value='';
        };
    } catch (error) {
        alert('Error!')
        display.value='';
        }
});