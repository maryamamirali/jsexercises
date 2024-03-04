

const phones = ["apple" , "nokia" , "motorolla" , "haier" , "samsung" , "sony"]

var select = document.querySelector("select");

for (i = 0; i < phones.length; i++){
    console.log(select[i]);
    select.innerHTML += `<option>${phones[i]}</option>`
}