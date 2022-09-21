function validar(){
    let email = document.getElementById('email').value;
    let numero = document.getElementById('celular').value;
    let descripcion = document.getElementById('descripcion').value;
    let pais_dest = document.getElementById('pais-destino').value;
    let ciudad_dest = document.getElementById('ciudad-destino').value;
    let pais_origin = document.getElementById('pais-origen').value;
    let ciudad_origin = document.getElementById('ciudad-origen').value;
    let espacio = document.getElementById('espacio-solicitado').value;
    let kilos = document.getElementById('kilos-solicitados').value;
    let foto1 = document.getElementById('foto-encargo-1');
    let foto2 = document.getElementById('foto-encargo-2');
    let foto3 = document.getElementById('foto-encargo-3');

    
    Nerrores = 0;

    if (!validarArchivo(foto1)){
        Nerrores += 1;
        document.getElementById('foto-encargo-1').style.color = "red";
    }
    if (!validarArchivo2(foto2)){
        if (!validarArchivo(foto2)){
            Nerrores += 1;
            document.getElementById('foto-encargo-2').style.color = "red";
        }
    }
    if (!validarArchivo2(foto3)){
        if (!validarArchivo(foto3)){
            Nerrores += 1;
            document.getElementById('foto-encargo-3').style.color = "red";
        } 
    }

    if (!validarNumero(numero)){
        Nerrores += 1;
        document.getElementById('celular').style.borderColor = "red";
    }

    if (!validarEmail(email)){
        Nerrores += 1;
        document.getElementById('email').style.borderColor = "red";
    }

    if (!validarEspacio(espacio)){
        Nerrores += 1;
        document.getElementById('espacio-solicitado').style.borderColor = "red";
    }

    if (!validarKilos(kilos)){
        Nerrores += 1;
        document.getElementById('kilos-solicitados').style.borderColor = "red";
    }

    if (!validarDescripcion(descripcion)){
        Nerrores += 1;
        document.getElementById('descripcion').style.borderColor = "red";
    }

    if (!validarPais(pais_dest)){
        Nerrores += 1;
        document.getElementById('pais-destino').style.borderColor = "red";
    }

    if (!validarCiudad(ciudad_dest)){
        Nerrores += 1;
        document.getElementById('ciudad-destino').style.borderColor = "red";
    }

    if (!validarPais(pais_origin)){
        Nerrores += 1;
        document.getElementById('pais-origen').style.borderColor = "red";
    }

    if (!validarCiudad(ciudad_origin)){
        Nerrores += 1;
        document.getElementById('ciudad-origen').style.borderColor = "red";
    }
   
    if (!validarDistintosPaises(pais_origin,pais_dest)){
        document.getElementById('pais-destino').style.borderColor = "red";
        Nerrores += 1;
    }

    if (!validarDistintasCiudades(ciudad_origin,ciudad_dest)){
        document.getElementById('ciudad-destino').style.borderColor = "red";
        Nerrores += 1;
    }

    
    if (Nerrores >= 0){
        return false
    }
    window.location.href = "inicio.html"
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
    let regex = /\+[0-9]{11}/;
    if (numero.length != 12 || !regex.test(numero)){
        return false;
    }

    return true;

}
  
function validarEmail(email) {
  
    var validRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  
    if (email.length < 100 && validRegex.test(email)) {

      return true;
  
    } else {
  
  
      return false;
  
    }
  
}
  function validarFecha(fecha){
      let regex = /(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$/;
      if (!regex.test(fecha)){
          return false;
      }
      return true;
  
  }
  function validarFechaFinal(fechaInicio,fechaFinal){
    let regex = /(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$/;
    AInicio = fechaInicio.substring(0,4);
    AMesInicio = fechaInicio.substring(5,7);
    ADiaInicio = fechaInicio.substring(8,10);
    AFinal = fechaFinal.substring(0,4);
    AMesFinal = fechaFinal.substring(5,7);
    ADiaFinal = fechaFinal.substring(8,10);
    if (AFinal < AInicio){
        return false;
    }
    if (AFinal == AInicio){
        if (AMesFinal < AMesInicio){
            return false;
        }
        if (AMesFinal == AMesInicio){
            if (ADiaFinal <= ADiaInicio){
                return false;
            }
        }
    }
    
    if (!regex.test(fechaFinal)){
        return false;
    }
    return true;
  
  }
  
function validarEspacio(espacio){
    if( espacio == null || espacio == 0 ) {
        return false;					
    }
    return true;
}
function validarKilos(kilos){
    if( kilos == null || kilos == 0 ) {
        return false;					
    }
    return true;
}

function validarPais(pais){
    if( pais == null || pais == 0 || pais == "Seleccione un país" ) {
        return false;					
    }
    return true;
}

function validarCiudad(ciudad){
    if( ciudad == null || ciudad == 0 || ciudad == 'Seleccione una ciudad' ) {
        return false;					
    }
    return true;
}
  
function validarArchivo(archivo){
    if (archivo == null){
        return false;
    }
    var archivoPath = archivo.value;

    // Allowing file type
    var allowedExtensions = /(\.png|\.jpg)$/i;

    if (!allowedExtensions.exec(archivoPath) || archivo.value != "") {
        archivo.value = '';
        return false;
    }
    return true;
}

function validarArchivo2(archivo2){
    if (archivo2 == null || archivo2.value != ''){
        return true;
    }
    return false;
}



// colocamos maximo solo para que en un futuro si se llegase a implementar, no se tenga que modificar
// porque dejar sin maximo es peligroso.
function validarDescripcion(descripcion){   
    if (descripcion != '' && descripcion.length < 250){
        return true;        
    }
    return false;
}

function validarDistintosPaises(pais1,pais2){
    if (pais1 == pais2){
        return false;
    }
    return true;
}

function validarDistintasCiudades(ciudad1,ciudad2){
    if (ciudad1 == ciudad2){
        return false;
    }
    return true;
}