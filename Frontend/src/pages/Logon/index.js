import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Given the SPA architecture. The performance will be improved by using the "Link" component instead of "a href=". The web page will not reload all content increasing the final performance

import api from '../../services/api';
import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import {FiLogIn} from 'react-icons/fi'; //md = Material Design. Essas bibliotecas já vem com o React / FI = feather icons

// os ClassName servirão para criarmos classes no CSS
// className para criar classes Javascript
export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){

            e.preventDefault();

            try {

                const response = await api.post('sessions', { id });

                localStorage.setItem('ongId', id); // salva no navegador as informações de Id e Nome
                localStorage.setItem('ongName', response.data.name);

                history.push('/profile'); // Redireciona para profile

            } catch (err){

                alert("Falha no Login tente novamente");

            }
    }

    return (
        <div className="logon-container">    
            <section className="form">

            <img src={ logoImg } alt='Be The Hero'/>
            
            <form onSubmit={handleLogin}>
                <h1> Login In </h1>
                <input placeholder="Sua ID" 
                       value={id}
                       onChange={e => setId(e.target.value)}
                /> 
                <button className = "button" type="submit"> Enter </button>
                <Link className="back-link" to = "/register"> Não tenho cadastro </Link>
                <FiLogIn size={16} color="#E02041"/> 
            
            </form>
            
            </section>
            <img src={ heroesImg } alt='Heroes'/>
        </div>        
    );
}