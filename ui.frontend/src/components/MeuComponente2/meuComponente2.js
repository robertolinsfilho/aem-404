import React from 'react';
import  './meuComponente2.scss'




const MeuComponente2 = ({imageTest = {}}) => {
  return(
    <div  class="have2">
      <h1   class="frase3"   >404 NOT FOUND </h1>
      <img class ="image" src={imageTest.src} alt="imagem"/>
    </div>
  );
   
};

export default MeuComponente2;
