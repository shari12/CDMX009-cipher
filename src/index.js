import cipher from './cipher.js';

const btnEncode = document.getElementById('btnEncode');
const btnDecode= document.getElementById('btnDecode');


//accionar boton Codificar
btnEncode.addEventListener('click', function(){

  let textOriginal =document.getElementById('mensaje').value; //obtener valores
  let numberDesplace = document.getElementById('desplazo').value;
  let res =  cipher.encode(textOriginal,numberDesplace);
   document.getElementById('resultMsg').innerHTML= "tu mensaje fue codificado: " + res;

 });


//accionar boton Decodificar
btnDecode.addEventListener('click', function(){
  let textOriginal =document.getElementById('mensaje').value; //obtener valores
  let numberDesplace = document.getElementById('desplazo').value;
  let decoderes = cipher.decode(textOriginal, numberDesplace);

  document.getElementById('resultMsg').innerHTML="tu mensaje ha sido decodificado: " + decoderes;
});


console.log(cipher);
