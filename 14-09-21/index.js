
function caller(){

    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "new.html");
    form.setAttribute("onsubmit", "setter()")

    var label = document.createElement('label');
    label.setAttribute("for", "name");
    label.innerHTML = "Name : ";
    form.appendChild(label);
    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("name", "name");
    element.setAttribute("id", "name");
    element.setAttribute("placeholder", "Name");
    form.appendChild(element);
    var br = document.createElement("br");
    form.appendChild(br);
    
    var label = document.createElement('label');
    label.setAttribute("for", "password");
    label.innerHTML = "Password : ";
    form.appendChild(label);
    var element = document.createElement("input");
    element.setAttribute("type", "password");
    element.setAttribute("name", "password");
    element.setAttribute("id", "password");
    element.setAttribute("placeholder", "password");
    form.appendChild(element);
    var br = document.createElement("br");
    form.appendChild(br);

    var label = document.createElement('label');
    label.setAttribute("for", "tel");
    label.innerHTML = "Phone Number : ";
    form.appendChild(label);
    var element = document.createElement("input");
    element.setAttribute("type", "number");
    element.setAttribute("name", "tel");
    element.setAttribute("id", "tel")
    element.setAttribute("placeholder", "Phone Number");
    form.appendChild(element);
    var br = document.createElement("br");
    form.appendChild(br);

    var label = document.createElement('label');
    label.setAttribute("for", "email");
    label.innerHTML = "Email : ";
    form.appendChild(label);
    var element = document.createElement("input");
    element.setAttribute("type", "email");
    element.setAttribute("name", "email");
    element.setAttribute("id", "email");
    element.setAttribute("placeholder", "Email");
    form.appendChild(element);
    var br = document.createElement("br");
    form.appendChild(br);

    var label = document.createElement('label');
    label.setAttribute("for", "select");
    label.innerHTML = "State : ";
    form.appendChild(label);
    var select = document.createElement("select");
    select.setAttribute("onchange", "city()");
    select.setAttribute("id", "state");
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
    label.innerHTML = "City : ";
    form.appendChild(label);
    var select1 = document.createElement("select");
    select1.setAttribute("id", "citie")
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

//     var body = document.getElementsByTagName("body")[0];

        var x = document.getElementsByTagName("select")[0].value;
        console.log(x);
        var optionx = document.getElementById("optionx");
        var optiony = document.getElementById("optiony");

    
//     //     // var y = document.getElementsByTagName("select").options;
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



    }