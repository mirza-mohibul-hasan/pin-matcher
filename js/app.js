function getPin(){
    const pin = generatePin();
    const pinString  = pin + '';
    if(pinString.length ===4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    // console.log(pin);
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;

});

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number ==='<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
});
document.getElementById('submit-confirm').addEventListener('click',function(){
    const generatedPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;

    if(generatedPin === typedPin){
        document.getElementById('pin-faulure').style.display = 'none';
        document.getElementById('pin-success').style.display = 'block';
    }
    else{
        document.getElementById('pin-success').style.display = 'none';
        document.getElementById('pin-faulure').style.display = 'block';
    }
    
});