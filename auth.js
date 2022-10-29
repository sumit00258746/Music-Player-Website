

console.log('imported')
function login(){
    console.log('loggin')
    var email = document.getElementById('userName')
    var password = document.getElementById('passWord')
    if(email.value === '' || password.value === ''){
        alert('Please fill up the boxes')
    }
    else location.href="index.html"
}

function signup(){
    console.log('signup')
    var fname = document.getElementById('firstName').value
    var lName = document.getElementById('lastName').value
    var email = document.getElementById('email').value
    var password = document.getElementById('passWord').value

    if(fname==='' || lName === '' || email == 
    '' || password === ''){
        alert('Please fill up the boxes')
    

    }else location.href="index.html"
}