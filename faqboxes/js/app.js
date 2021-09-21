// UI
const togglebtns= document.querySelectorAll('.faq-toggle');
// console.log(togglebtns);

togglebtns.forEach(togglebtn=>{
    // console.log(togglebtn);

    togglebtn.addEventListener('click',()=>{
        // togglebtn.parentElement.classList.toggle('active');
        
        togglebtn.parentNode.classList.toggle('active');
    })
});