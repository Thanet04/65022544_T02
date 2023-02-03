function Focus1(NameTxt) {
    NameTxt.style.background = "yellow";
}

function Blur2(NameTxt) {
    NameTxt.style.background = "white";
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    var h1 = document.querySelector("h1");
    while (h1) {
        h1.parentNode.removeChild(h1);
        h1 = document.querySelector("h1");
    }

    var Name = document.querySelector('#Name').value;
    var SurName = document.querySelector('#SurName').value;
    var date = document.querySelector('#date').value;
    var dob = document.querySelector('#dob').value;

    if (Name == "") {
        var h1 = document.createElement("h1");
        var text = document.createTextNode("Insert Name");
        h1.appendChild(text);
        h1.style.color = "red";
        document.body.appendChild(h1);
    }
    if (SurName == "") {
        var h1 = document.createElement("h1");
        var text = document.createTextNode("Insert Surname");
        h1.appendChild(text);
        h1.style.color = "red";
        document.body.appendChild(h1);
    }
    if (date == "") {
        var h1 = document.createElement("h1");
        var text = document.createTextNode("Select a Date");
        h1.appendChild(text);
        h1.style.color = "red";
        document.body.appendChild(h1);
    }
    if (dob == "") {
        var h1 = document.createElement("h1");
        var text = document.createTextNode("Select a Language");
        h1.appendChild(text);
        h1.style.color = "red";
        document.body.appendChild(h1);
    }
    if (Name !== "" && SurName !== "" && date !== "" && dob !== "") {
        var h1 = document.createElement("h1");
        var text = document.createTextNode( Name +","+SurName + ","+ date +","+dob);
        h1.appendChild(text);  
        h1.style.color = "green";
        document.body.appendChild(h1);
    }
});
