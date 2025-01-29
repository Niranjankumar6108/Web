

/* Start Sign up Coding*/

var signup_frm = document.getElementById("signup_frm");
signup_frm.onsubmit = function () {
    var user = bota(document.getElementById("username").value);
    var email = bota(document.getElementById("email").value);
    var phone = bota(document.getElementById("phone").value);
    var pass = bota(document.getElementById("password").value);

    var user_object_data = { username: user, email: email, phone: phone, password: pass };
    var user_text_data = JSON.stringify(user_object_data);

    if (user != "" && email != "" && phone != "" && pass != "") {
        localStorage.setItem(email, user_object_data);
        var signup_btn = document.getElementById("signup_btn");
        signup_btn.style.background = "#14b129";
        signup_btn.innerHTML = "<i class='fa-solid fa-circle-check'></i> Signup Successful !";
        setTimeout(function () {
            signup_btn.style.background = "rgb(247, 120, 120)";
            signup_btn.innerHTML = "Sign up";
            signup_frm.reset();
        }, 3000)
        return false;
    }
}
/*End Signup Coding*/

/* Start Email Validation coding */
var email_input = document.getElementById("email");
email_input.onchange = function () {
    var email = document.getElementById("email").value;
    var warning = document.getElementById("email_notice");
    var signup_btn = document.getElementById("signup_btn");
    if (localStorage.getItem(email) != null) {
        warning.style.display = "block";
        email_input.style.borderBottomColor = "red";
        signup_btn.disabled = true;
        signup_btn.style.background = "#ccc";
        email_input.onclick = function () {
            email_input.value = "";
            email_input.style.borderBottomColor = "#ccc";
            warning.style.display = "none";
            signup_btn.disabled = false;
            signup_btn.style.background = "rgb(247, 120, 120)";
        }

    }
}
/* End Email Validation coding */

/*Start Login Coding*/
var login_frm = document.getElementById("login_frm");
login_frm.onsubmit = function () {
    var email = document.getElementById("login_email");
    var password = document.getElementById("login_password");
    var login_email_war = document.getElementById("login_email_warning");
    var login_password_war = document.getElementById("login_password_warning");
    if (localStorage.getItem(email.value) == null) {

        login_email_war.style.display = "block";
        email.style.borderBottomColor = "red";

        email.onclick = function () {
            email.value = "";
            login_email_war.style.display = "none";
            email.style.borderBottomColor = "#ccc";
        }
    }
    else {
        var text_data = localStorage.getItem(email.value);
        var obj_data = JSON.parse(text_data);
        var correct_email = obj_data.email;
        var correct_password = obj_data.password;

        if (email.value == correct_email) {
            if (password.value == correct_password) {
                alert("Login Successfuly");
            }
            else {
                login_password_war.style.display = "block";
                password.style.borderBottomColor = "red";

                email.onclick = function () {
                    password.value = "";
                    login_password_war.style.display = "none";
                    password.style.borderBottomColor = "#ccc";
                }
            }
        }
    }
    return false;
}
/*End Login Coding*/