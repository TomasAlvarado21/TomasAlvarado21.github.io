var contador_fotos = 1;


function agregar(){
    if (contador_fotos<3){
        contador_fotos += 1;
        document.getElementById('agregar-foto').innerHTML += '<br><input type="file" id="foto-encargo-'+String(contador_fotos)+'" name ="foto-encargo-'+String(contador_fotos)+'" class="foto-encargo-'+String(contador_fotos)+'">';
    }
}


//mejor hacer un for con el lenght 

function agrandar(foto){
    foto.height = '1280px';
    foto.width = '1024px';
    img_cnt = 1;
}
function achicar(foto){
    foto.height = '640px';
    foto.width = '480px';
    img_cnt = 0;
}
