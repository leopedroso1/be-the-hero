import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom'; // Given the SPA architecture. The performance will be improved by using the "Link" component instead of "a href=". The web page will not reload all content increasing the final performance
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './styles.css';
import api from '../../services/api';

export default function NewIncident(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e){

        e.preventDefault();

        const data = {
            
            title,
            description,
            value,
        };

        try {

            await api.post('incidents', data, {

                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile');

        } catch (err) {
            alert('Erro ao cadastrar caso! Tente novamente');
        }
    }

    return (

            <div className="new-incident-container">    
            <div className="content">
                <section>
                    <img src={logoImg} alt=" Be the hero" />
                    <h1>Cadastrar novo caso</h1>    
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to = "/profile">Voltar para Home</Link>
                    <FiArrowLeft size={16} color="#E02041"/> 
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do Caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
 
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div> 
    );
}