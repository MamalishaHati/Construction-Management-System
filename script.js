let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let nameField= document.getElementById("nameField");
let title = document.getElementById("title");


signinbtn.onclick = function(){
    nameField.style.maxHeight = '0';
    title.innerHTML = "Sign In";
    
    window.location.assign('AddProp.html');
}

