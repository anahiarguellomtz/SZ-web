var name = null;
var email = null;
var subject = null;
var company = null;
var project = null;
var data = null;

function sendForm(){

name = document.getElementById("name").value;
email = document.getElementById("email").value;
subject = document.getElementById("subject").value;
company = document.getElementById("company").value;
phone = document.getElementById("phone").value;
message = document.getElementById("message").value;



data = {
    "name":name,
    "email":email,
    "subject":subject,
    "company":company,
    "phone":phone,
    "message":message
}

var http = new XMLHttpRequest();
var url = 'https://us-central1-shellzero-prod.cloudfunctions.net/insertData';

http.open("POST", url, true);
http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        myFunction(http.status);
        clearForm();

    }
}
http.send(JSON.stringify(data));
};

function myFunction(status) {
    // Get the snackbar DIV
    if(status == 200){
        var x = document.getElementById("success");     
      
        // Add the "show" class to DIV
        x.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }else{
        var y = document.getElementById("fail");
      
        // Add the "show" class to DIV
        y.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ y.className = y.className.replace("show", ""); }, 3000);
    }
    
  };

function clearForm(){
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("subject").value = '';
    document.getElementById("company").value= '';
    document.getElementById("phone").value = '';
    document.getElementById("message").value = '';

}