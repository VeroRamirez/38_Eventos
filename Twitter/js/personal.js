elemento=1;
function creaItem(){
    
    msg=document.getElementById("comment").value;
    var checkbx = document.createElement("input");

    checkbx.type = "checkbox";    // make the element a checkbox
    checkbx.value = elemento;         // make its value "pair"
    checkbx.name = "miOpcion";
    
    row=document.createElement("div");
    row.setAttribute("class","row well");
    row.setAttribute("id",elemento);
    
    col1=document.createElement("div");
    col1.setAttribute("class","col-xs-10");
    document.getElementById("lista").appendChild(row);
    
    row.appendChild(col1);
    col1.appendChild(checkbx);
    msg.strike();
    col1.appendChild(document.createTextNode(msg));
    
    
    col2=document.createElement("div");
    col2.setAttribute("class","col-xs-2");
    document.getElementById("lista").appendChild(row);
    row.appendChild(col2);
    
    icono = document.createElement("span");
    icono.setAttribute("class","glyphicon glyphicon-trash");
    
    icono.onclick = function borra() {
        console.log(this);
    };
    col2.appendChild(icono);
    
    elemento++;
}

function tachar(elemento){
    elemento.strike();
}
