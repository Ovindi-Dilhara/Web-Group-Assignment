function validateFunction3() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "") {
        document.getElementById("name-small").innerHTML = "Please Enter Your Name";
        document.getElementById("name-span").style.color = "white";
    }
    if (email == "") {
        document.getElementById("email-small").innerHTML = "Please Enter Your Email";
        document.getElementById("email-span").style.color = "white";
    }
    if (message == "") {
        document.getElementById("message-small").innerHTML = "Please Enter Your Message";
        document.getElementById("message-span").style.color = "white";
    }


}

document.addEventListener("DOMContentLoaded", function () {
    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");
    var messageField = document.getElementById("message");

    nameField.addEventListener("input", function () {
        document.getElementById("name-small").innerHTML = "";
        document.getElementById("name-span").style.color = "black";
    });
    emailField.addEventListener("input", function () {
        document.getElementById("email-small").innerHTML = "";
        document.getElementById("email-span").style.color = "black";
    });
    messageField.addEventListener("input", function () {
        document.getElementById("message-small").innerHTML = "";
        document.getElementById("message-span").style.color = "black";
    });
});

function validateFunction4() {
    var login_email = document.getElementById("login_email");
    var login_password = document.getElementById("login_password");

    login_email.addEventListener("input", function () {
        document.getElementById("login_email_small").innerHTML = "";
        document.getElementById("email_label").style.color = "white";
    });

    login_password.addEventListener("input", function () {
        document.getElementById("login_password_small").innerHTML = "";
        document.getElementById("password_label").style.color = "white";
    });

    if (login_email.value == "") {
        document.getElementById("login_email_small").innerHTML = "Please Enter Your Email";
        document.getElementById("email_label").style.color = "black";
    }
    if (login_password.value == "") {
        document.getElementById("login_password_small").innerHTML = "Please Enter Your Password";
        document.getElementById("password_label").style.color = "black";
    }
}