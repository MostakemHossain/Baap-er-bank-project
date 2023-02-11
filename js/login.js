// step 1: click event hander with submit button

document.getElementById('btn-submit').addEventListener('click',function(){
    //step-3
    //get the email address inside the imail input field
    const emailField= document.getElementById('email');
    const email= emailField.value;

    //step 3: get password
    const passField= document.getElementById('password');
    const pass= passField.value;

    //step-4 verify email and password

    if(email==='mostakememon123@gmail.com' && pass==='mostakem123'){
        window.location.href = 'bank.html';

    }else{
        alert('Invilid username and password')
    }
    
})