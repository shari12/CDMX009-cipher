const cipher ={encode, decode};

function encode(text, offset){
  let newText ="";
//recorrer palabra
  for(let i=0; i < text.length; i++){
    let numberAscii = text.charCodeAt(i);//obter posicion ascii
    let formEncode;
    //posiones donde estan las letras

    formEncode = (( (numberAscii - 65) + parseInt(offset)) % 26) + 65;  //formula para nueva posicion
    newText += String.fromCharCode(formEncode); //nueva posicion ascii

  }
  return newText;

}

function decode(text, offset){




}



export default cipher;
