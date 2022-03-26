import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'; //importação do componente que vai permitir que mude de pagina sem recarregar o navegador.

const PaginaInicial = () =>  ( // arrow function é outra forma de declarar funções: sintaxe = tipo da função nome da função = (parametros) => ( e o que ela retorna)
  <div>
    <h1>Escolha seu caminho em JavaScript</h1>

    <div className="conteudo-opcoes">
      <link className="opcao-front-end" to='/front-end'>Front-end</link>
      <link className="opcao-back-end" to='/back-end'>Back-end</link>
    </div>
    
  </div>
);

export default PaginaInicial;