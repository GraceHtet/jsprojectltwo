// UI
const textel=document.getElementById('text');
const speedel=document.getElementById('speed');
const pgh="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ";
// console.log(pgh.length);

let idx=1;
let speed=1000;

function autotext(){
    // console.log('hey');
    
    textel.innerText=pgh.slice(0,idx);

    // idx +=1;
    idx++;

    if(idx > pgh.length){
        idx=1;
    }

    setTimeout(autotext,speed);

}

autotext();

// event Listener 
speedel.addEventListener('input',()=>{
    // console.log('hey');
    // console.log(speedel.value);

    // 1000ဆို 1sကို တစ်လုံး 100ကို ၀.1sကိုတစ်လုံးထွက်တာ တန်ဖိုးကြီးလေစာလုံးပေါ်တာနှေးလေ
    // secနဲ့ valueက ပြောင်းပြန်အချိုးကျနေတော့ အတည့်အတိုင်းမြှောက်ရင် တန်ဖိုးများသွားမှာ အာ့ကြောင့် ပြောင်းပြန်လှန်မြှောက်  
    speed = 100 / speedel.value ;
})