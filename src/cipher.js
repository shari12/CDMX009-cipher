const cipher ={encode, decode};



function encode(offset,text){
  let newText ='';//variable donde se guardara el nuevo string
  let numberAscii;
  //let formEncodeMin;
  let formEncodeMayus;

  if(typeof text === "string"){
    for(let i=0; i < text.length; i++){//empieza el recorrido de la palabra
      numberAscii = text.charCodeAt(i);//obtenemos el ascii de cada letra
      formEncodeMayus = (numberAscii - 65 + parseInt(offset)) % 26 + 65; //formula para nueva posicion mayusculas
            newText += String.fromCharCode(formEncodeMayus); //pasar a string la nueva posicion ascii
    }//termina recorrido
    return newText; //regresa el string codificado
  }
  else {
    throw TypeError('ingresaste un caracter invalido');
  }
}//termina funcion encode

function decode(offset,text){
  let newText ='';//variable donde se guardara el nuevo string
  let numberAscii;
  //let formEncodeMin;
  let formDecodeMayus;
  if(typeof text === "string"){
    for(let i=0; i < text.length; i++){//empieza el recorrido de la palabra
    numberAscii = text.charCodeAt(i);//obtenemos el ascii de cada letra
    formDecodeMayus = (numberAscii + 65 - parseInt(offset)) % 26 + 65; //formula para nueva posicion mayusculas
      newText += String.fromCharCode(formDecodeMayus); //pasar a string la nueva posicion ascii
      }//termina recorrido
    return newText; //regresa el string codificado
  }else{
    throw TypeError('ingresaste un caracter invalido')
  }
}



export default cipher;


// function cipherOperation(offset, text){
//   let newText = "";
//   let numberAscii;
//   let formEncodeMayus;
//   let formDecodeMayus;
//
//   if (typeof text === "string"){
//     for (let i = 0; i < text.length; i++){
//       numberAscii = text.charAt(i);
//       switch (cipherOperation) {
//         case encode:
//         formEncodeMayus = (numberAscii - 65 + parseInt(offset)) % 26 + 65; //formula para nueva posicion mayusculas
//          newText += String.fromCharCode(formEncodeMayus); //pasar a string la nueva posicion ascii
//           break;
//         case decode:
//         formDecodeMayus = (numberAscii + 65 - parseInt(offset)) % 26 + 65;
//         newText += String.fromCharCode(formDecodeMayus);
//         break;
//       }
//     }// termina recorrido
//     return newText;
//
//   }else{
//     throw TypeError("ingresaste un caracter invalido ")
//   }
// }
