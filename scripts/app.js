const btn = document.querySelector('button');

function handleClick (event) {
    const myLi = document.createElement('li');
    const input = document.querySelector('input');
    myLi.innerHTML = input.value;
    input.value = '';
    document.querySelector('ul').appendChild(myLi);
}

btn.addEventListener('click', handleClick)
