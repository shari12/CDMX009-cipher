import cipher from './cipher.js';
//obtener botones y agregar funciones al hace click
document.getElementById('btnEncode').addEventListener('click', getValuesEncode);
document.getElementById('btnDecode').addEventListener('click', getValuesDecode);
document.getElementById('btnCleaner').addEventListener('click', clean);

function getValuesEncode() { //obtenemos los valores de index.html
  let textOriginal = document.getElementById('mensaje').value;
  let numberDesplace = document.getElementById('desplazo').value;
  let encoderes = cipher.encode(numberDesplace, textOriginal); //asignamos una variable y traemos la funcion de encode

  if (textOriginal == textOriginal.toLowerCase()) { //verificamos si estan en minisculas
    alert("por favor ingresa tu mensaje en mayusculas ");
  } else if (numberDesplace === "") { //verifica que la caja de desplazo no esta vacia
    alert("por favor asegurate de tener un numero de desplazo ");
  } else {
    document.getElementById('resultMsg').innerHTML = "Tu mensaje fue codificado: " + encoderes; // mostramos el resultado en index.html

  }


}

function getValuesDecode() {
  let textOriginal = document.getElementById('mensaje').value;
  let numberDesplace = document.getElementById('desplazo').value;
  let decoderes = cipher.decode(numberDesplace, textOriginal);

  if (textOriginal == textOriginal.toLowerCase()) {
    alert("por favor ingresa tu mensaje en mayusculas ");
  } else if (numberDesplace === "") {
    alert("por favor asegurate de tener un numero de desplazo ");

  } else {

    document.getElementById('resultMsg').innerHTML = "Tu mensaje fue codificado: " + decoderes;
  }

}

function clean(){
  //location.reload();
  document.getElementById('mensaje').value="";
  document.getElementById('desplazo').value="";
  document.getElementById('resultMsg').innerHTML="";

}






console.log(cipher);
