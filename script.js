// Generate random passwords.
function generate(){

    // Defining password length and complexity.
    var complexity = document.getElementById("slider").value;

    // Password values.
    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    var password = "";
    
    // Loop to choose password.
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    // Add password to textbox on user screen.
    document.getElementById("display").value = password;

}

// Password length of 25
document.getElementById("length").innerHTML = "Length: 25";

// slider function
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }
}

// Function Copy to Clipboard.
function copyPassword(){

    document.getElementById("display").select();
    document.execCommand("copy");
    alert("Password has been copied to your clipboard!");
}