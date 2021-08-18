function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin
    }
    else{
        return getPin();
    }
}
function genaretPin(){
    const pin = getPin();
    console.log(pin);
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const clacInput = document.getElementById('typed-number');
    if(isNaN(number)){
        if(number == 'C'){
            clacInput.value = '';
        }
    }
    else {
    
    const preNumber = clacInput.value;
    const newCalc = preNumber + number
    clacInput.value = newCalc;
    }
})

function pinVerify(){
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-number').value;
    const passed = document.getElementById('if-passed');
    const faield = document.getElementById('if-failed');
    if(typedNumber == pin){
        // console.log('matched');
        passed.style.display = 'block';
        faield.style.display = 'none'
    }
    else{
        // console.log('opps! dont matched');
        faield.style.display = 'block'
        passed.style.display = 'none'
    }
}