var validar = function(){
    var nombres = document.formulario.nombres1; // getElementById 
    if(nombres.value == ""){
        document.getElementById("mensaje_nombres").innerText = "El campo nombres es requerido";
    }
}

window.onload = function(){
    var boton = document.getElementById("btn_validar");
    boton.onclick = function(){
        validar();
    }
}
