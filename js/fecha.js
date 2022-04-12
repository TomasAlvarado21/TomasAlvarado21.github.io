date = new Date();
year = String(date.getFullYear());
month = String(date.getMonth() + 1);
day = String(date.getDate());
hour = String(date.getHours());
minutes = String(date.getMinutes());
hour_f = String(date.getHours()+3);

if (!(month < "10")){
    month = '0' + month;
}
if (!(day < '10')){
    day = '0'+ day;
}
if (!(minutes<'10')){
    minutes = '0' + minutes;
}

if (!(hour<'10')){
    hour = '0' + hour;
}
if (!(hour_f<'10')){
    hour_f = '0' + hour_f;
}
hora_actual = hour + ':' + minutes;
fecha_actual = year + '-' + month + '-' + day + ' ' + hora_actual;

document.querySelector('input[name="dia-hora-inicio"]').value = fecha_actual;

hora_final = hour_f + ':' + minutes;
fecha_final = year + '-' + month + '-' + day + ' ' + hora_final;
document.querySelector('input[name="dia-hora-termino"]').value = fecha_final;
