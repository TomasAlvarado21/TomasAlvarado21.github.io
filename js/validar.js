function validar(){
  let nombre = document.getElementById('nombre').value;
  let email = document.getElementById('email').value;
  let numero = document.getElementById('celular').value;
  let fecha_i = document.getElementById('dia-hora-inicio').value;
  let fecha_f = document.getElementById('dia-hora-termino').value;
  let archivo = document.getElementsById('foto-actividad');
  let archivo2 = document.getElementById('foto-actividad-extra');
  let inputs = document.getElementsByClassName('rrss');
  let contacto = document.getElementById('contactar-por').value;
  let descripcion = document.getElementById('descripcion-evento').value;
  let region = document.getElementById('regiones').value;
  let comuna = document.getElementById('comunas').value;

  let Nerrores = 0
  let errors = ""

    if (!validarArchivo(archivo)){
        document.getElementById('foto-actividad').style.borderColor = "red";
        errors += '<p>Tiene que ingresar un archivo pdf o jpg. </p>';
        Nerrores += 1;
    }
    if (!validarArchivo2(archivo2)){
        document.getElementById('foto-actividad').style.borderColor = "red";
        errors += '<p>Tiene que ingresar un archivo pdf o jpg. </p>';
        Nerrores += 1;
    }
    if (!validarArchivo(archivo2)){
        document.getElementById('foto-actividad').style.borderColor = "red";
        errors += '<p>Tiene que ingresar un archivo pdf o jpg. </p>';
        Nerrores += 1;
    }
    if (!input_arr(inputs) && validarContacto(contacto)){
        document.getElementsByClassName('rrss').style.borderColor = 'red';
        errors += '<p>No ha agregado su ID correspondiente al contacto que eligio o sobre pasa los 50 caracteres</p>'
        errors += 1;
    }
    if (!validarNombre(nombre)){
        document.getElementById('Nombre').style.borderColor = "red";
        errors += '<p>El nombre está incorrecto.</p>';
        Nerrores += 1;
    } 

    if (!validarComentarios(descripcion)){
        document.getElementById('descripcion-evento').style.borderColor = "red";
        errors += '<p>Tiene que ingresar un comentario valido. </p>';
        Nerrores += 1;
    }
    if (!validarNumero(numero)){
        document.getElementById('celular').style.borderColor = "red";
        errors += '<p>Tiene que ingresar un numero valido.(Que empiece +569)</p>';
        Nerrores += 1;
    }
    if (!validarFecha(fecha_i)){
        document.getElementById('dia-hora-inicio').style.borderColor = "red";
        errors += '<p>Tiene que ingresar una fecha de inicio valida.</p>';
        Nerrores += 1;
    }
    if (!validarFecha(fecha_f)){
        document.getElementById('dia-hora-termino').style.borderColor = "red";
        errors += '<p>Tiene que ingresar una fecha de termino valida.</p>';
        Nerrores += 1;
    }
    if (!validarEmail(email)){
        document.getElementById('email').style.borderColor = "red";
        errors += '<p>Tiene que ingresar un email valido.</p>';
        Nerrores += 1;
    }
    if (!validarRegyCom(region,comuna)){
        document.getElementById('regiones').style.borderColor = "red";
        document.getElementById('comunas').style.borderColor = "red";
        errors += '<p>Tiene que ingresar un email valido.</p>';
        Nerrores += 1;
    }

    


    if (Nerrores > 1){
        document.getElementById('parrafo-errores').innerHTML = errors;
        document.getElementById('err').innerHTML = "Tus Errores en el formulario son: :c";
        document.getElementById("errores").style.backgroundColor = "red"
        return false;
    }
    if (Nerrores = 1){
        return false
    }
    return true;
}

function validarNombre(nombre){

    let regex = /^[a-zA-Z ]*$/;

    if (nombre.length > 100 | !regex.test(nombre)){
        return false;
    }

    return true;

}

function validarNumero(numero){
    let regex = /\+569[0-9]{8}/;
    if (numero.length > 100 | !regex.test(numero)){
        return false;
    }
    return true;
}

function validarEmail(email) {

    var validRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  
    if (email.length < 100 | email.value.test(validRegex)) {
  
      alert("Valid email address!");
  
      document.form1.text1.focus();
  
      return true;
  
    } else {
  
      alert("Invalid email address!");
  
      document.form1.text1.focus();
  
      return false;
  
    }
  
  }
function validarFecha(fecha){
    let regex = /[0-9]{4}-(0[0-9]|[1][0-2])-[0-9]{2} (0[0-9]|[1][0-9]|2[0-3]):[0-5][0-9]/;
    if (fecha.length > 20 | !regex.test(fecha)){
        return false;
    }
    return true;

}

function validarTema(tema){
    if (tema != '0'){
        return true;
    }
    return false;
}


function validarArchivo(archivo){
    var archivoPath = archivo.value;

    // Allowing file type
    var allowedExtensions = /(\.png|\.jpg)$/i;

    if (!allowedExtensions.exec(archivoPath)) {
        alert('Tipo de archivo invalido');
        archivo.value = '';
        return false;
    }
    return true;
}

function validarArchivo2(archivo2){
    if (archivo2.value != ''){
        return true;
    }
    return false;
}

function input_arr(inputs){
    var count = 0;
    var i = 0;
    for (i in inputs.length){
        if ((inputs[i] != '') && (4 < inputs[i].length) && (inputs[i].length < 50)){
            count += 1;
        }
    }
    if (count > 5 | count < 1){
        return false;
    }
    else{
        return true;
    }
}
function validarContacto(contacto){
    if (contacto != ''){
        return true;
    }
    return false;
}
// colocamos maximo solo para que en un futuro si se llegase a implementar, no se tenga que modificar
// porque dejar sin maximo es peligroso.
function validarComentarios(descripcion){
    if (descripcion != '' && descripcion.length < 1000){
        return true;        
    }
    else if (descripcion == ''){
        return true
    }    
    return false;
}
function validarRegyCom(region,comuna){
    if (region.value == 'sin-region' | comuna.value == 'sin-comuna'){
        return false;
    }
    return true;
}