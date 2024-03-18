let nameInput = document.getElementById('name');
console.log(nameInput.value);

let selectList = document.getElementById('mySelect');
selectList.addEventListener('change', function(){
    console.log(selectList.value);
});

let newOption = document.createElement('option');
newOption.text = 'New Option';
newOption.value = 'newOption';
selectList.addEventListener(newOption);

let radioButtons = document.getElementsByName('myRadio');
let selectedValue;
for(let i=0 i<radioButtons.length; i++){
    radioButtons[i].addEventListener('change', function(){
        if(this.checked){
            selectedValue=this.value;
            console.log(selectedValue);
        }
    });
}

let hiddenField = document.getElementById('hiddenField');
console.log(hiddenField.value);

let emailInput = document.getElementById('hiddenField');
console.log(hiddenField.value);

let emailInput = document.getElementById('email');
emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
emailInput.addEventListener('blur', function(){
    if(!emailRegex.test(emailInput.value)){
        console.log('Invalid email input.');
    }
});