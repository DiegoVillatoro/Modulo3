
const expandir =(id) =>{
    let element = document.getElementById("c"+id[1]);

    let collapsibles = document.getElementsByClassName("collapsible-content");
    let coll = document.getElementsByClassName("collapsible");
    for(let i = 0; i < collapsibles.length; i++){
        // if (coll[i].active)
        if (coll[i].classList.contains("active")){
            coll[i].classList.remove("active");
        }
        if((i+1)!= parseInt(id[1])){
            collapsibles[i].style.display="";
        }
    }
    
    if (element.style.display==""){
        element.style.display = "block";
        document.getElementById(id).classList.add("active");


    }
    else{
        element.style.display = "";
        document.getElementById(id).classList.remove("active");

    }

}