var contador_fotos = 1;
var img_cnt = 0;
let big_btn = document.getElementById("1");
let foto1 = document.getElementById('foto1').style;


function agregar(){
    if (contador_fotos<5){
        document.getElementById('agregar-foto').innerHTML += '<br><input type="file" id="foto-actividad-extra" name ="foto-actividad" class="foto-actividad">';
        contador_fotos += 1;
    }
}

if (img_cnt == 0){
    big_btn.addEventListener('click', achicar(foto1));
} 
if (img_cnt == 1){
    big_btn.addEventListener('click', agrandar(foto1));
}
//mejor hacer un for con el lenght 

function agrandar(foto){
    foto.height = '600px';
    foto.width = '800px';
}
function achicar(foto){
    foto.height = '240px';
    foto.width = '320px';
}
