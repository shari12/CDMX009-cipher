import cipher from './cipher.js';

const btnEncode = document.getElementById('btnEncode');
const btnDecode= document.getElementById('btnDecode');

//accionar boton Codificar
btnEncode.addEventListener('click', function(){

  let textOriginal =document.getElementById('mensaje').value; //obtener valores
  let numberDesplace = document.getElementById('desplazo').value;
  let res =  cipher.encode(textOriginal,numberDesplace);
  if(textOriginal == textOriginal.toUpperCase() && numberDesplace != ""){
      document.getElementById('resultMsg').innerHTML= "tu mensaje fue codificado: " + res;

  }else {
    alert("por favor ingresa tu mensaje en mayusculas y asegurate de ingresar un numero de desplazo");
  }


 });


//accionar boton Decodificar
btnDecode.addEventListener('click', function(){
  let textOriginal =document.getElementById('mensaje').value; //obtener valores
  let numberDesplace = document.getElementById('desplazo').value;
  let decoderes = cipher.decode(textOriginal, numberDesplace);

  //if(textOriginal == textOriginal.toUpperCase() && numberDesplace !=""){
    document.getElementById('resultMsg').innerHTML="tu mensaje ha sido decodificado: " + decoderes;

  // }else {
  //   alert("por favor ingresa tu mensaje en mayusculas y asegurae de tener un numero de desplazamietos");
  // }


});








console.log(cipher);
