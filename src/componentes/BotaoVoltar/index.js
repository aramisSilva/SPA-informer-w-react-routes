import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const BotaoVoltar = () => (
  <div className="area-botao">
    <link className="botao-voltar" to='/'>Voltar</link>
  </div>
);

export default BotaoVoltar;