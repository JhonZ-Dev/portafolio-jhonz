let menuInvisible=false;
//funcion que oculta o muestra el menú
function mostrarOculatarMenu(){

    if(menuInvisible){
        document.getElementById("nav").classList="";
        menuInvisible=false;
    
    }else{  
        document.getElementById("nav").classList="responsive";
        menuInvisible=true;
    
    
    }

}
function seleccionar(){
    //se oculta cuando eligue una opcion
    document.getElementById("nav").classList="";
    menuInvisible=false;
}

function efectoHabilidades(){
    var skills=document.getElementById("skills");
    var distancia_skills=window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades=document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
    }
}

//funciones de habilidades
window.onscroll=function(){
    efectoHabilidades();
}
