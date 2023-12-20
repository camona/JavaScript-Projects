let counter = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const classlist = e.currentTarget.classList;
        if (classlist.contains('decrease'))
            counter--;
        else if (classlist.contains('reset'))
            counter = 0;
        else if (classlist.contains('increase'))
            counter++;

        if (counter > 0)
            value.style.color = 'green';
        else if (counter < 0)
            value.style.color = 'red';
        else if (counter === 0)
            value.style.color = '#222';

        value.textContent = counter;
    });
});