// UI
const counters = document.querySelectorAll('.counter');
// console.log(counters);

counters.forEach((counter)=>{
    // console.log(counter);
    counter.innerText = "0";

    // console.log(counter.getAttribute('data-target'));

    const updatecounter = ()=>{
    // const target = counter.getAttribute('data-target');

    const target = Number(counter.getAttribute('data-target'));
    // console.log(typeof target);

    // number methodမပေးဘဲ အပေါင်းလေးနဲကပ်ပေးတာ
    const ctr= +counter.innerText;
    // console.log(typeof ctr);
    

    const increment = target/300;
    // console.log(increment);

    if(ctr < target){
        counter.innerText = `${Math.ceil(ctr + increment)}`;
        // တစ်ခုပျောက်ပြီးအဲ့တစ်ခုနေရာမှာအစားဝင်စေချင်လို့
        // setInterval(updatecounter,1000);
        setTimeout(updatecounter,100);
    }

    }

    updatecounter();
});