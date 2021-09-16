
function caller(){

    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("id", "form");
    form.setAttribute("onsubmit", "setter()")

    var div = document.createElement('div');
    div.setAttribute("class", "form-group has-feedback");
    var label = document.createElement('label');
    label.setAttribute("for", "name");
    label.innerHTML = "Name";
    div.appendChild(label);
    elementname = document.createElement("input");
    elementname.setAttribute("type", "text");
    elementname.setAttribute("name", "name");
    elementname.setAttribute("id", "name");
    elementname.setAttribute("class", "form-control");
    elementname.setAttribute("placeholder", "Name");
    elementname.setAttribute("required", "true");
    if(localStorage.getItem("txtname")!="")
    elementname.setAttribute("value", localStorage.getItem("txtname"));
    div.appendChild(elementname);
    form.appendChild(div);
    var br = document.createElement("br");
    form.appendChild(br);
    
    var div = document.createElement('div');
    div.setAttribute("class", "form-group has-feedback");
    var label = document.createElement('label');
    label.setAttribute("for", "password");
    label.innerHTML = "Password";
    div.appendChild(label);
    var div1 = document.createElement('div');
    div.setAttribute("class", "form-group has-feedback");
    var elementpass = document.createElement("input");
    elementpass.setAttribute("type", "password");
    elementpass.setAttribute("name", "password");
    elementpass.setAttribute("id", "password");
    elementpass.setAttribute("class", "form-control flex");
    elementpass.setAttribute("placeholder", "password");
    elementpass.setAttribute("onblur", "validatePassword()");
    elementpass.setAttribute("onkeyup", "liveValidate()");
    elementpass.setAttribute("required", "true");
    if(localStorage.getItem("txtpassword")!=""){
        elementpass.setAttribute("value", JSON.parse(localStorage.getItem("txtpassword")));
    }
    var togglepass = document.createElement("i");
    togglepass.setAttribute("id", "togglePassword");
    togglepass.setAttribute("class", "bi bi-eye-slash flex");
    div1.appendChild(elementpass);
    div1.appendChild(togglepass);
    div.appendChild(div1);
    form.appendChild(div);

    var div = document.createElement("div");
    div.setAttribute("id", "message");
    var tag = document.createElement("h6");
    tag.setAttribute("id", "tag");
    div.appendChild(tag);
    form.appendChild(div);
    var br = document.createElement("br");
    form.appendChild(br);

    var div = document.createElement('div');
    div.setAttribute("class", "form-group has-feedback");
    var label = document.createElement('label');
    label.setAttribute("for", "tel");
    label.innerHTML = "Phone Number";
    div.appendChild(label);
    var elementtel = document.createElement("input");
    elementtel.setAttribute("type", "number");
    elementtel.setAttribute("name", "tel");
    elementtel.setAttribute("id", "tel");
    elementtel.setAttribute("class", "form-control");
    elementtel.setAttribute("placeholder", "Phone Number");
    elementtel.setAttribute("onblur", "validateTel()");
    elementtel.setAttribute("required", "true");
    if(localStorage.getItem("txttel")!=""){
    elementtel.setAttribute("value", JSON.parse(localStorage.getItem("txttel")));
    }
    div.appendChild(elementtel);
    form.appendChild(div);
    var br = document.createElement("br");
    form.appendChild(br);

    var label = document.createElement('label');
    label.setAttribute("for", "email");
    label.innerHTML = "Email";
    form.appendChild(label);
    var elementemail = document.createElement("input");
    elementemail.setAttribute("type", "email");
    elementemail.setAttribute("name", "email");
    elementemail.setAttribute("id", "email");
    elementemail.setAttribute("class", "form-control");
    elementemail.setAttribute("placeholder", "Email");
    elementemail.setAttribute("onblur", "validateEmail()");
    elementemail.setAttribute("required", "true");
    if(localStorage.getItem("txtemail")!=""){
        elementemail.setAttribute("value", JSON.parse(localStorage.getItem("txtemail")));
    }
    form.appendChild(elementemail);
    var br = document.createElement("br");
    form.appendChild(br);

    var label = document.createElement('label');
    label.setAttribute("for", "select");
    label.innerHTML = "State";
    form.appendChild(label);
    var select = document.createElement("select");
    select.setAttribute("onchange", "city()");
    select.setAttribute("id", "state");
    select.setAttribute("class", "form-control");
    select.setAttribute("required", "true");
    var optiond = document.createElement("option");
    optiond.setAttribute("name", "defaultOption");
    var option1 = document.createElement("option");
    option1.setAttribute("name", "firstOption");
    var option2 = document.createElement("option");
    option2.setAttribute("name", "secondOption");
    optiond.innerHTML = "Select";
    option1.innerHTML = "Gujarat";
    option2.innerHTML = "Maharastra";
    
    select.appendChild(optiond);
    select.appendChild(option1)
    select.appendChild(option2);
    form.appendChild(select);
    var br = document.createElement("br");
    form.appendChild(br);

    var label = document.createElement('label');
    label.setAttribute("for", "city");
    label.innerHTML = "City";
    form.appendChild(label);
    var select1 = document.createElement("select");
    select1.setAttribute("id", "citie");
    select1.setAttribute("class", "form-control");
    select1.setAttribute("required", "true");
    var optionx = document.createElement("option");
    optionx.setAttribute("id", "optionx");
    var optiony = document.createElement("option");
    optiony.setAttribute("id", "optiony");

    select1.appendChild(optionx)
    select1.appendChild(optiony);
    form.appendChild(select1);
    var br = document.createElement("br");
    form.appendChild(br);

    var div = document.createElement('div');
    div.setAttribute("class", "form-group has-feedback");
    var btn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.setAttribute("class", "btn btn-primary flex");
    btn.innerHTML = "Submit";
    btn.setAttribute("name", "button");
    var myVar = setInterval(myTimer, 1000);
    var btn1 = document.createElement('button');
    btn1.setAttribute("type", "button");
    btn1.setAttribute("class", "btn btn-primary flex tbtn");
    btn1.setAttribute("id", "demo");
    btn1.innerHTML = "";
    div.appendChild(btn);
    div.appendChild(btn1);
    form.appendChild(div);

    document.getElementsByTagName("body")[0].appendChild(form);



    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye / eye slash icon
        this.classList.toggle('bi-eye');
    });

};

function myTimer(){
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}



function city(){

        var x = document.getElementsByTagName("select")[0].value;
        var optionx = document.getElementById("optionx");
        var optiony = document.getElementById("optiony");
    
    if (x == 'Gujarat'){
        optionx.innerHTML = "Ahmedabad";
        optiony.innerHTML = "Gandhinagar";
    } else if (x == 'Maharastra') {
        optionx.innerHTML = "Mumbai";
        optiony.innerHTML = "Pune";
    } else {
        optionx.innerHTML = "";
        optiony.innerHTML = "";
    }
    }

    function setter(){
        // form.setAttribute("action", "");

        var name = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        var tel = document.getElementById("tel").value;
        var email = document.getElementById("email").value;
        var state = document.getElementsByTagName("select")[0].value;
        var citie = document.getElementById("citie")[0].value;

        localStorage.setItem("txtname", name);
        localStorage.setItem("txtpassword", JSON.stringify(password));
        localStorage.setItem("txttel", JSON.stringify(tel));
        localStorage.setItem("txtemail", JSON.stringify(email));
        localStorage.setItem("txtstate", state);
        localStorage.setItem("txtcity", citie);


        var tagtext = document.getElementById("tag").innerHTML;
        if(validatePassword() && validateEmail() && validateTel()){
                form.setAttribute("action", "new.html");            
        }else {
            previousData(); 
        }
    }

    function previousData(){
            form.setAttribute("action", "index.html");
            elementname.innerHTML= localStorage.getItem("txtname");
            elementpass.innerHTML = localStorage.getItem("txtpassword");
            elementtel.innerHTML = localStorage.getItem("txttel")
            elementemail.innerHTML = localStorage.getItem("txtemail")
    }

    function validateTel(){
        var tel = document.getElementById("tel").value;
        
        if (tel.length != 10){
            alert("Phone number should be 10 digits long!");
            return false;            
        } else {
            return true;
        }
    }

    function validateEmail(){
        var email = document.getElementById("email").value;
        var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
        var check = pattern.test(String(email).toLowerCase());
        if (!check){
            alert("invalid mail")
            return false;
        } else {
            return true;
        }
    }

    function validatePassword(){

        var password = document.getElementById("password");
        
        document.getElementById("message").style.display = "block";
        var pass = password.value;
        var pattern = /(?=.*[0-9])(?=.*[a-z])/;
        var pattern1 = /(?=.*[A-Z])/;
        var check = pattern.test(pass);
        var check1 = pattern1.test(pass);
        if ((check1==true) && (pass.length >= 6) && (check==true)){
            document.getElementById("tag").innerHTML = "password is Strong";
            return true;
        } else if((!check1) && (pass.length >= 6) && (check)){
            document.getElementById("tag").innerHTML = "password is less strong";
            //alert("please use combination of small-capital characters, digits to make password stronger");
            return true;
        } else {
            document.getElementById("tag").innerHTML = "password is weak";
            return false;
        } 
    }

    function liveValidate() {
        document.getElementById("message").style.display = "block";
        var pass = password.value;
        var pattern = /(?=.*[0-9])(?=.*[a-z])/;
        var pattern1 = /(?=.*[A-Z])/;
        var check = pattern.test(pass);
        var check1 = pattern1.test(pass);
        if ((check1==true) && (pass.length >= 6) && (check==true)){
            document.getElementById("tag").innerHTML = "password is Strong";
        } else if((!check1) && (pass.length >= 6) && (check)){
            document.getElementById("tag").innerHTML = "password is less strong";
            //alert("please use combination of small/capital characters, digits, special characters to make password stronger");
        } else {
            document.getElementById("tag").innerHTML = "password is weak";
        }
      }