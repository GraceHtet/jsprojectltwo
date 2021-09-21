// UI
const times= document.getElementById('times');
const loveme=document.querySelector('.loveme');

let timesclicked =0;

// db click 
let clicktimes = 0;

loveme.addEventListener('click',(e)=>{
    // console.log('hey');

    if(clicktimes === 0){

        // ဘာမှမနှိပ်ရသေးတဲ့အချိန် click အရေအတွက် 0
        clicktimes = new Date().getTime();
        // console.log(clicktimes);
    }else{


        // doubleclick ကို millisecနဲ့ဖမ်းချင်လို့ 
        // လူတစ်ယောက်ရဲ့ ပျမ်းမျှdouble clickဆက်တိုက်နှိပ်ဖို့ကြာချိန်က 1sအတွင်းမှာပဲရှိ(အဲဒါနဲ့ဖမ်းထားတာ)
        // ပထမဆုံးclick နှိပ်တုန်းကအချိန်နဲ့ နောက်ထပ် click နှိပ်လိုက်တဲ့ အချိန် ခြားနားချက်က 1s(1000ms)ထက်နည်းရင်
        // တစ်နည်း double click ဖြစ်သွားရင် ဆိုတဲ့အခြေအနေ

        if(new Date().getTime() - clicktimes < 1000){

            console.log('i am dbclick');
            // doubleclick ပြန်ဖြစ်ဖို့ clicktimesကို0ပြန်ပေး

            createheart(e);
            clicktimes=0;

        }else{
            clicktimes=new Date().getTime();
        }
    }
});

const createheart =(e)=>{
    
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    // console.log(heart);
    const cx=e.clientX;
    const cy=e.clientY;

    const offsettop=e.target.offsetTop;
    const offsetleft=e.target.offsetLeft;
    
    const xinside = cx - offsetleft;
    const yinside = cy - offsettop;

    heart.style.top= `${yinside}px`;
    heart.style.left=`${xinside}px`;

    loveme.appendChild(heart);

    // timesclicked +=1;
    // timesclicked++;
    // times.textContent=timesclicked;

    times.textContent = ++timesclicked;

    setTimeout(()=>heart.remove(),1000);

}