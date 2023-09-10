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
