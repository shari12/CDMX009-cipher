const cipher ={encode, decode};
let newText = '';//variable donde se guardara el nuevo string
let numberAscii;
let formEncodeMin;
let formEncodeMayus;

function encode(text, offset){

  if(typeof text === "string"){
    for(let i=0; i < text.length; i++){//empieza el recorrido de la palabra
      numberAscii = text.charCodeAt(i);//obtenemos el ascii de cada letra
      formEncodeMayus = (numberAscii - 65 + parseInt(offset)) % 26 + 65; //formula para nueva posicion mayusculas
    //  formEncodeMin = (numberAscii - 97 + parseInt(offset)) % 26 + 97;//formula para nueva poscion minisculas
      //if(numberAscii>64 && numberAscii<=90){
        newText += String.fromCharCode(formEncodeMayus); //pasar a string la nueva posicion ascii
      //}else if (numberAscii >96 && numberAscii<=122) {
        //newText += String.fromCharCode(formEncodeMin);
      //}
    }//termina recorrido
    return newText; //regresa el string codificado
  }
  else {
    throw TypeError('ingresaste un caracter invalido');
  }


}//termina funcion encode

function decode(text, offset){
  let formDecodeMin;
  let formDecodeMayus;
  for(let i=0; i < text.length; i++){//empieza el recorrido de la palabra
    numberAscii = text.charCodeAt(i);//obtenemos el ascii de cada letra
    formDecodeMayus = (numberAscii + 65 - parseInt(offset)) % 26 + 65; //formula para nueva posicion mayusculas
    formDecodeMin = (numberAscii - 97 - parseInt(offset)) % 26 + 52;//formula para nueva poscion minisculas
    if(numberAscii>64 && numberAscii<=90){
      newText += String.fromCharCode(formDecodeMayus); //pasar a string la nueva posicion ascii
    }else if (numberAscii >96 && numberAscii<=122) {
     newText += String.fromCharCode(formDecodeMin);
    }
  }//termina recorrido
    return newText; //regresa el string codificado


}



export default cipher;
