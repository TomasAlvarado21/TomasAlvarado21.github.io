var rrss = ['facebook','twitter','instagram','telegram','whatsapp','tiktok','otra'];
var contador = 0;
var already_selected = []


document.querySelector("#contactar-por").addEventListener("change", function() {
    if (!already_selected.includes(this.value)){
        if(contador < 5){
            document.getElementById('reset-btn').style.display = 'inline-block';
            document.querySelector('input[name= input-'+ this.value + ']').style.display = rrss.includes(this.value) ? "inline-block" : "none";
            contador += 1;
            already_selected.push(this.value);
        }
    }
}); 
document.querySelector("#tema").addEventListener("change", function() {
    if (this.value == 'otro'){
        document.getElementById('otro-tema').style.display = 'inline-block';
    }
    else{
        document.getElementById('otro-tema').style.display = 'none';
    }
}); 
