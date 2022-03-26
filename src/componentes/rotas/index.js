import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import PaginaInicial from '../PaginaInicial';
import PaginaBackEnd from '../PaginaBackEnd';
import PaginaFrontEnd from '..//PaginaFrontEnd';

const Rotas = () => (
    //BrowserRouter = permite sincronizar a aplicação e a Url. ao navegar entre os componentes a Url também será alterada.
    <BrowserRouter> 

        <Routes>
        
            <Route exact path = '/' element= {<PaginaInicial/>}/>
            <Route path = '/front-end' element = {<PaginaFrontEnd/>}/>
            <Route path = '/back-end' element = {<PaginaBackEnd/>}/>

        </Routes>    
    
    </BrowserRouter>

);

export default Rotas;
