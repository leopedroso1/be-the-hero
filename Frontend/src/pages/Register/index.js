import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';


// <input placeholder="UF" style={{width: 80}}/> Temos em todas as tags essa propriedade styles em que usamos 2x {}. Uma para indicar que é codigo javascript e a outra para dizer que é um objeto javascript. Então conseguimos usar todo o controle CSS

export default function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory(); // 

    async function handleRegister(e){

        e.preventDefault(); // Previne o recarregamento default

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        
        try {
        // Integration frond-end x backend Login
        const response = await api.post('ongs', data); //axios already send in .JSON format
        alert(`Seu ID de acesso ${response.data.id}`); // use crases para colocar variáveis

        history.push('/');
        
        } catch (err){

            alert('Erro no cadastro, tente novamente');
            
        }
    }

    return (

        <div className="register-container">    
            <div className="content">
                <section>
                    <img src={logoImg} alt=" Be the hero" />
                    <h1>Cadastro</h1>    
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos da sua ONG.</p>

                    <Link className="back-link" to = "/"> Não tenho cadastro </Link>
                    <FiArrowLeft size={16} color="#E02041"/> 
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={e => setName(e.target.value)}    
                    />

                    <input type="email" 
                           placeholder="E-mail" 
                           value={email}
                           onChange={e => setEmail(e.target.value)} 
                    />

                    <input placeholder="WhatsApp" 
                           value={whatsapp}
                           onChange={e => setWhatsapp(e.target.value)} 
                    />

                    <div className="input-group">
                        <input placeholder="Cidade"
                               value={city}
                               onChange={e => setCity(e.target.value)} 
                        />
                        <input placeholder="UF" 
                               style={{width: 80}}
                               value={uf}
                               onChange={e => setUF(e.target.value)}
                        /> 
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div> 

    );

}