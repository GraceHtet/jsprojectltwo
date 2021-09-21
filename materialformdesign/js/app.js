const labels=document.querySelectorAll('.form-group label');
// console.log(labels);

labels.forEach(label=>{
    // console.log(label);
    // console.log(label.innerText);
    // console.log(label.innerText.split());

    // စာလုံးတစ်လုံးချင်းစီကို အခန်းတစ်ခန်းစီအနေနဲ့ခွဲထုတ်ဖို့ "" or '' သုံး space မထည့်ရ
    // console.log(label.innerText.split(''));

    label.innerHTML = label.innerText
        .split('')
        .map((letter,index)=>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
        .join('');
});

// split အခြေအနေမှာ စာလုံးတစ်လုံးချင်းစီဖြစ်နေပြီ

// letterဆိုတာ ထွက်လာမဲ့စာလုံးတစ်လုံးချင်းစီအတွက်parameterသပ်သပ်ပဲ
// forEach ဆိုရင် datavalueအနေနဲ့ပဲထုတ်ပေးတာဖြစ်လို့ span tagကိုlooping ပတ်ပြီး ထည့်ဖို့အဆင်မပြေ
// ပြီးတော့ forEach ဆင့်ကဲဆင့်ကဲထပ်သုံးဖို့အတွက်အဆင်မပြေဘူး
//တစ်လုံးချင်းစီကို arrayနဲ့ပြန်ထုတ်ပေးစေချင်လို့ mapနဲ့ပတ်

// စာလုံးတစ်လုံးနဲ့တစ်လုံးခြား ဘာမှမခြားစေချင်လို့ join('')နဲ့ concatထပ်လုပ်