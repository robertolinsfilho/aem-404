import React from 'react';
import  './meuComponente.scss'



const MeuComponente = ({text,text2}) => {
  return(
    <div  class="have">
      <h1   class="frase1"   >{text ? text : 'I have bad news for you'} </h1>
      <h4  class="frase2">{text2 ? text2 : 'The page you are looking for might be removed or is temporarily unavailable'}</h4>
      <button class="button">BACK TO HOME</button>
    </div>
  );
   
};

export default MeuComponente;
