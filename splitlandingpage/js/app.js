// UI
const conatiner=document.querySelector('.container');

const left=document.querySelector('.left'),
    right=document.querySelector('.right');

// Event Listener
left.addEventListener('mouseenter',()=>{
    conatiner.classList.add('hover-left');
});

left.addEventListener('mouseleave',()=>conatiner.classList.remove('hover-left'));

right.addEventListener('mouseenter',()=>conatiner.classList.add('hover-right'));
right.addEventListener('mouseleave',()=>conatiner.classList.remove('hover-right'));