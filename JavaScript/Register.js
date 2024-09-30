const form = document.getElementById('form');
let error = document.getElementById('error');

function displayError(msg){
    error.style.visibility = 'visible';
    error.innerHTML = msg;
}

function hideError(){
    error.style.visibility = 'hidden';
}

form.addEventListener('submit',function(e){
    let name = document.getElementById('name').value;
    console.log(name);
    let email = document.getElementById('email').value;
    let date = document.getElementById('date').value;
    let aggrement = document.getElementById('aggrement').checked;
    
    if(name == '' || email == ''){
        displayError("All field must be filled");
    }
    else if(!email.includes('@')){
        displayError('Email must be include "@"');
    }
    else if(!email.includes('.com')){
        displayError('Email must be endswith ".com"');
    }
    else if(date==""){
        displayError('*Input your date of birth, Please');
    }
    else if(!aggrement){
        displayError("Agreement must be filled ");
    }
    else{
        if(confirm("Data have been saved")){
            window.location.replace('../HTML/HomePage.html'); // buat redirect
        }
        else{
            location.reload();
        }
    }
    e.preventDefault();
    setTimeout('hideError()',3000);
});