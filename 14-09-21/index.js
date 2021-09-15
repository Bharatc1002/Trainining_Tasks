var elementname;
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
    
    var label = document.createElement('label');
    label.setAttribute("for", "password");
    label.innerHTML = "Password";
    form.appendChild(label);
    var elementpass = document.createElement("input");
    elementpass.setAttribute("type", "password");
    elementpass.setAttribute("name", "password");
    elementpass.setAttribute("id", "password");
    elementpass.setAttribute("class", "form-control");
    elementpass.setAttribute("placeholder", "password");
    elementpass.setAttribute("onblur", "validatePassword()");
    elementpass.setAttribute("onkeyup", "liveValidate()");
    elementpass.setAttribute("required", "true");
    if(localStorage.getItem("txtpassword")!="")
    elementpass.setAttribute("value", localStorage.getItem("txtpassword"));

    form.appendChild(elementpass);

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
    var option1 = document.createElement("option");
    option1.setAttribute("name", "firstOption");
    var option2 = document.createElement("option");
    option2.setAttribute("name", "secondOption");
    option1.innerHTML = "Gujarat";
    option2.innerHTML = "Maharastra";
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

    var btn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.innerHTML = "Submit";
    btn.setAttribute("name", "button");
    form.appendChild(btn);

    document.getElementsByTagName("body")[0].appendChild(form);

};




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
    }
    }

    function setter(){

        

        var name = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        var tel = document.getElementById("tel").value;
        var email = document.getElementById("email").value;
        var state = document.getElementsByTagName("select")[0].value;
        var citie = document.getElementById("citie")[0].value;

        localStorage.setItem("txtname", name);
        localStorage.setItem("txtpassword", password);
        localStorage.setItem("txttel", tel);
        localStorage.setItem("txtemail", email);
        localStorage.setItem("txtstate", state);
        localStorage.setItem("txtcity", citie);


        var tagtext = document.getElementById("tag").value;
        if(tagtext === "password is Strong" || tagtext === "password is less strong"){
                form.setAttribute("action", "new.html");            
        } else {
            previousData(); 
        }
    }

    function previousData(){
            form.setAttribute("action", "index.html");
            elementname.innerHTML= localStorage.getItem("txtname");
            elementpass.innerHTML = localStorage.getItem("txtpassword");
            elementtel.innerHTML = localStorage.getItem("txttel")
            elementemail.innerHTML = localStorage.getItem("txtemail")
            // select.innerHTML = localStorage.getItem("txtstate")
            // select1.innerHTML = localStorage.getItem("txtcity")   
    }

    function validateTel(){
        var tel = document.getElementById("tel").value;
        
        if (tel.length != 10){
            alert("Phone number should be 10 digits long!");
            
        }
    }

    function validateEmail(){
        var email = document.getElementById("email").value;
        var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
        var check = pattern.test(String(email).toLowerCase());
        if (!check){
            alert("invalid mail")
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
        } else if((!check1) && (pass.length >= 6) && (check)){
            document.getElementById("tag").innerHTML = "password is less strong";
            //alert("please use combination of small/capital characters, digits, special characters to make password stronger");
        } else {
            document.getElementById("tag").innerHTML = "password is weak";
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