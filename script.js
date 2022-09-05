const button1 = document.getElementById('btn1');
button1.addEventListener('click', () => {
    const element1 = document.querySelector('.content');
    element1.style.backgroundColor = 'red';
});
const button2 = document.getElementById('btn2');
button2.addEventListener('click', () => {
    const element2 = document.querySelector('.content');
    element2.style.backgroundColor = 'green';
});
const button3 = document.getElementById('btn3');
button3.addEventListener('click', () => {
    const element3 = document.querySelector('.content');
    element3.style.backgroundColor = 'blue';
});