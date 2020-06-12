function replaceAll(txt, replace, with_this) {
return txt.replace(new RegExp(replace, 'g'),with_this);

}
function updateme(datalama,databaru){
var text = document.getElementsByTagName('body')[0].innerHTML;
text = replaceAll(text,datalama,databaru);
document.getElementsByTagName('body')[0].innerHTML = text;
}
function replaceAll(txt, replace, with_this) {
return txt.replace(new RegExp(replace, 'g'),with_this);

}
function runmebytime(){
var datalama = 'ratna-20';
var databaru = 'dewi-20';
var tombollama = 'http://lh6.googleusercontent.com/-TewvYA4ZxQk/TrKp41QAl2I/AAAAAAAAAHQ/rV12H5Z3Oto/buy-buton.png';
var tombolbaru = 'http://1.bp.blogspot.com/_1vs9JkWgNf0/TSJSJlDfqtI/AAAAAAAAAHU/b1BGQU4Jn1g/s1600/button.jpg';
updateme(datalama,databaru);
updateme(tombollama,tombolbaru);
}
setTimeout('runmebytime()',100);
