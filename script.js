function check(){
    let radioButton = document.querySelectorAll('input[name = conversion]');
    let process; 
    for(radioButton of radioButton){
        if(radioButton.checked){
            process = radioButton.value
            break;
        }
    }
    if(process == 0){
        const output = document.getElementById('updatedText').innerHTML = "Degree Fahrenheit ℉"
        let temp = document.getElementById('input').value;
        let conversionTemp = (temp * 9/5)+32;
        document.getElementById('out').innerHTML = conversionTemp
    }
    else if(process == 1){
        const output = document.getElementById('updatedText').innerHTML = "Degree Celsius ℃"
        let temp = document.getElementById('input').value;
        let conversionTemp = (temp-32)*5/9;
        document.getElementById('out').innerHTML = conversionTemp
    }
    else if(process == 2){
        const output = document.getElementById('updatedText').innerHTML = "Kelvin K"
        let temp = document.getElementById('input').value;
        let conversionTemp = (temp-32)*5/9+273.15;
        document.getElementById('out').innerHTML = conversionTemp
    }
    else if(process == 3){
        const output = document.getElementById('updatedText').innerHTML = "Kelvin K "
        let temp = parseFloat(document.getElementById('input').value);
        let conversionTemp = parseFloat(temp+273.15);
        document.getElementById('out').innerHTML = conversionTemp
    }
    else if(process == 4){
        const output = document.getElementById('updatedText').innerHTML = "Degree Fahrenheit ℉"
        let temp = document.getElementById('input').value;
        let conversionTemp = (temp-273.15)*9/5+32;
        document.getElementById('out').innerHTML = conversionTemp
    }
    else if(process == 5){
        const output = document.getElementById('updatedText').innerHTML = "Degree Celsius ℃"
        let temp = document.getElementById('input').value;
        let conversionTemp = temp-273.15;
        document.getElementById('out').innerHTML = conversionTemp
    }
}

