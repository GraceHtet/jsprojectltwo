// UI
const codes = document.querySelectorAll('.code');
// console.log(codes);

// console.log(codes[0]);
// စလာကတည်းက cursorချထားစေချင်လို့
codes[0].focus();

codes.forEach((code,index)=>{
    // console.log(code);

    code.addEventListener('keydown',(e)=>{

        // number onlyဖမ်းတာ
        if(e.key >= 0 && e.key <= 9){
            // codes[index+1].focus();

            // for only 1 number
            codes[index].value='';


            if(index !== 5){

                // keyup မခေါ်ပဲ စာပေါ်ဖို့ ၁၀◌msစက္ကန့်စာလောက်နှေးပေးပြီးမှ focusသွားချတာ
                setTimeout(()=>codes[index+1].focus(),10);
            }

        }else if(e.key === "Backspace"){
            
            if(index !== 0){

                setTimeout(()=>codes[index-1].focus(),10);
            }
        }
    })
})