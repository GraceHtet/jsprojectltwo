// UI
const loadtext = document.querySelector('.loadingtext');
const bg = document.querySelector('.bg');

let load=0;

let blurinterval =  setInterval(blur,30);

function blur(){

    // load += 1;

    load++;

    if(load >99){
        clearInterval(blurinterval);
    }

    // console.log('hey');

    loadtext.textContent=`${load}%`;
    loadtext.style.opacity=scale(load,0,100,1,0);
    bg.style.filter=`blur(${scale(load,0,100,70,0)}px)`
}
    // inmin  inmax
// လက်ရှိ 0ကနေ 100% အထိရောက်သွားရင် 
// စာသားရဲ့ opacityကို 1 ကနေ 0 (opacityပျောက်သွားစေ◌ချင်တာ)၂
// ပုံရဲ့ blurကို 70 ကနေ 0( ပုံကိုကြည်သွားစေ◌ချင်တာ)

// 100% ဖြစ်သွားတဲ့အချိန်မှာ opacity 0 ဖြစ်သွားစေချင်

// စာသားကို opacity 1 ကနေ0ကိုသွားစေချင်လို့ outmin က 1, outmax က 0
// ပုံကိုကျ blur 70 ကနေ 0ဖြစ်သွားစေချင်လို့ outmin က 70, outmax က 0

// load က နေစ


             //No လက်ရှိရောက်    ဖြစ်ချင်တဲ့ဟာ
                  //နေတဲ့နေရာ 
const scale = (num,inmin,inmax,outmin,outmax)=>{
    return (num-inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
}

// console.log(scale(0,0,100,1,0));
// console.log(scale(1,0,100,1,0));
// console.log(scale(2,0,100,1,0));
// console.log(scale(3,0,100,1,0));
// console.log(scale(4,0,100,1,0));
// console.log(scale(5,0,100,1,0));
// console.log(scale(6,0,100,1,0));
// console.log(scale(100,0,100,1,0));


