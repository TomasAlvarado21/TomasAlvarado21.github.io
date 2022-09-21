function validar(){
    let email = document.getElementById('email').value;
    let numero = document.getElementById('celular').value;
    let fecha_i = document.getElementById('fecha-ida').value;
    let fecha_f = document.getElementById('fecha-regreso').value;
    let pais_origin = document.getElementById('pais-origen').value;
    let ciudad_origin = document.getElementById('ciudad-origen').value;
    let pais_dest = document.getElementById('pais-destino').value;
    let ciudad_dest = document.getElementById('ciudad-destino').value;
    let espacio_disponible = document.getElementById('espacio-disponible').value;
    let kilos_disponibles = document.getElementById('kilos-disponibles').value;



    Nerrores = 0;



    if (!validarNumero(numero)){
        document.getElementById('celular').style.borderColor = "red";
        Nerrores += 1;
    }
    if (!validarEmail(email)){
        document.getElementById('email').style.borderColor = "red";
        Nerrores += 1;
    }
    if (!validarFechaFinal(fecha_i,fecha_f)){
        document.getElementById('fecha-ida').style.borderColor = "red";
        document.getElementById('fecha-regreso').style.borderColor = "red";
        Nerrores += 1;
    }
    if (!validarPais(pais_origin)){
        document.getElementById('pais-origen').style.borderColor = "red";
        Nerrores += 1;
    }
    if (!validarCapital(ciudad_origin)){
        document.getElementById('ciudad-origen').style.borderColor = "red";
        Nerrores += 1;
    }
    if (!validarPais(pais_dest)){
        document.getElementById('pais-destino').style.borderColor = "red";
        Nerrores += 1;
    }
    if (!validarDistintosPaises(pais_origin,pais_dest)){
        document.getElementById('pais-destino').style.borderColor = "red";
        Nerrores += 1;
    }
    if (!validarCapital(ciudad_dest)){
        document.getElementById('ciudad-destino').style.borderColor = "red";
        Nerrores += 1;
    }
    if (!validarDistintasCiudades(ciudad_origin,ciudad_dest)){
        document.getElementById('ciudad-destino').style.borderColor = "red";
        Nerrores += 1;
    }
    if (!validarEspacio(espacio_disponible)){
        document.getElementById('espacio-disponible').style.borderColor = "red";
        Nerrores += 1;
    }
    if (!validarKilos(kilos_disponibles)){
        document.getElementById('kilos-disponibles').style.borderColor = "red";
        Nerrores += 1;
    }


    
    if (Nerrores >= 0){
        return false
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
  
      alert("Invalid email address!");
  
  
      return false;
  
    }
  
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
    
    if (!regex.test(fechaFinal) || !regex.test(fechaInicio)){
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
    if( pais == null || pais == 0 || pais == "Seleccione un pais" ) {
        return false;					
    }
    return true;
}

function validarCapital(ciudad){
    if( ciudad == null || ciudad == 0 || ciudad == "Seleccione una ciudad" ) {
        return false;					
    }
    return true;
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