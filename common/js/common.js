const SideBtn = document.querySelector('.side_btn');
const CloseBtn = document.querySelector('.close_btn');
const Body = document.querySelector('body');

SideBtn.addEventListener('click', () => {
    Body.classList.add('open_sm');
});

CloseBtn.addEventListener('click', () => {
    Body.classList.remove('open_sm');
});