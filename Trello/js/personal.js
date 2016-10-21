function creaItem(){
    
    msg=document.getElementById("comment").value;
    var checkbx = document.createElement("input");

    checkbx.type = "checkbox";    // make the element a checkbox
    checkbx.name = "miOpcion";
    
    li=document.createElement("li");
    li.setAttribute("class","list-group-item well well-sm");
    document.getElementById("lista").appendChild(li);
    li.appendChild(checkbx);
    li.appendChild(document.createTextNode(" " + msg));
    
    icono = document.createElement("span");
    icono.setAttribute("class","glyphicon glyphicon-trash bote");
    icono.addEventListener("click", borrame);
    icono.style.cursor="pointer";
    li.appendChild(icono);
    
    li.addEventListener("click", tachame);
}

function tachame(){
    if(this.childNodes[0].checked){
        this.style.textDecoration="line-through";
    }else{
        this.style.textDecoration="none";
    }
}

function borrame(){
    node=this.parentElement;
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
    
}