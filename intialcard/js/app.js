// UI
const panels=document.querySelectorAll('.panel');
// console.log(panels);

panels.forEach(panel=>{
    // console.log(panel);

    panel.addEventListener('click',()=>{
        // console.log('hey');

        // active ma htae khin shi khae tae class ko a yin phyote chin tr moh
        // function ko a paw mhr yay
        removeactivepreclass();

        panel.classList.add('active');
    });
});

function removeactivepreclass(){

    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}