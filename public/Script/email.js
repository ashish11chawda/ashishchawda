(function () {
    emailjs.init("user_DQYbPfC0lXSTAj6W2Uz4e");
})();
function submitForm() {
    var submitButton = document.getElementById("submit");
    submitButton.innerHTML = "Sending...";
    // get values from FORM
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    if(!name || name == ""){
        alert("Please enter your name");
        return;
    }
    if(!email || email == ""){
        alert("Please enter your email");
        return;
    }
    if(!subject || subject == ""){
        alert("Please enter your subject");
        return;
    }
    if(!message || message == "" || message.length < 10){
        alert("Please enter your message or message is too short");
        return;
    }

    var templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    emailjs.send('service_hx5knzw', 'template_o1upjrq', templateParams)
        .then(function (response) {
            submitButton.innerHTML = "Submit";
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            alert("Message sent successfully");
        }, function (error) {
            console.log('FAILED...', error);
        });
}