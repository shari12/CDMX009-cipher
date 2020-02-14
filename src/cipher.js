const cipher ={encode, decode};
let newText ="";//variable donde se guardara el nuevo string
let numberAscii;
let formEncodeMin;
let formEncodeMayus;
let formDecodeMin;
let formDecodeMayus;

function encode(text, offset){

  for(let i=0; i < text.length; i++){//empieza el recorrido de la palabra
    numberAscii = text.charCodeAt(i);//obtenemos el ascii de cada letra
    formEncodeMayus = (numberAscii - 65 + parseInt(offset)) % 26 + 65; //formula para nueva posicion mayusculas
    formEncodeMin = (numberAscii - 97 + parseInt(offset)) % 26 + 97;//formula para nueva poscion minisculas
    if(numberAscii>64 && numberAscii<=90){
      newText += String.fromCharCode(formEncodeMayus); //pasar a string la nueva posicion ascii
    }else if (numberAscii >96 && numberAscii<=122) {
      newText += String.fromCharCode(formEncodeMin);
    }
  }//termina recorrido
  return newText; //regresa el string codificado
}//termina funcion encode

function decode(text, offset){

  for(let i =0; i<text.length; i++){
    numberAscii = text.charCodeAt(i);
    formDecodeMayus = (numberAscii - 65 - parseInt(offset)) % 26 + 65;
    formDecodeMin = (numberAscii - 97 - parseInt(offset)) % 26 + 97;

    if( numberAscii >64 && numberAscii<=90){
      newText += String.fromCharCode(formDecodeMayus);
    }else if (numberAscii >96 && numberAscii<=122) {
      newText += String.fromCharCode(formDecodeMin);
    }
  }
  return newText;

}



export default cipher;
