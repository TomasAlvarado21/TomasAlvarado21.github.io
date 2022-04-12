let botooon = document.getElementById("reset-btn");
botooon.addEventListener('click', () => {
    contador=0;
    already_selected = []
    document.getElementById('input-facebook').removeAttribute('style');
    document.getElementById('input-twitter').removeAttribute('style');
    document.getElementById('input-instagram').removeAttribute('style');
    document.getElementById('input-telegram').removeAttribute('style');
    document.getElementById('input-whatsapp').removeAttribute('style');
    document.getElementById('input-tiktok').removeAttribute('style');
    document.getElementById('input-otra').removeAttribute('style');
    document.getElementById('reset-btn').removeAttribute('style');
     
});
