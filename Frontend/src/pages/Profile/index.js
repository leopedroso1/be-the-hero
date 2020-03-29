import React, { useState, useEffect } from 'react'; // useEffect serve para dispararmos alguma função em um determinado momento do código
import { Link, useHistory } from 'react-router-dom'; // Given the SPA architecture. The performance will be improved by using the "Link" component instead of "a href=". The web page will not reload all content increasing the final performance
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './styles.css';

import api from '../../services/api';

export default function Profile(){

    const [incidents, setIncidents] = useState([]);
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    //Parametros: qual função e quando (toda vez que mudar essa condição será executada a função). 
    // Se o array estiver vazio executa somente 1x
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]); 

    async function handleDeleteIncident(id){ // Quando vincularmos essa função no OnClick precisamos fazer desta forma como esta ao lado >> pois se não excluiremos todos os casos do banco, pois, ao passarmos somente handleDeleteIncident(incidents.id) ele executará a função e retorno será no OnClick, então para orquestrarmos passamos a arrowfunction button onClick={() => handleDeleteIncident(incident.id)} type="button">

        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id)); //Exclui em tempo real sem necessidade de refresh. No caso ele varre o array e altera o array para todos sem o id que excluimos

        }catch (err){
            alert('erro ao deletar o caso tente novamente');
        }
    }

    function handleLogout(){

        localStorage.clear();
        history.push('/'); //rota raiz de login '/'

    }

    return (
        <div className="profile-container">
            <header>
 
                <img src={logoImg} alt="Be the hero" />
                <span>Welcome, {ongName}!</span>

                <Link className="button" to="/incidents/new">Cadastra novo caso</Link>            
                <button onClick={handleLogout} type="button"> 
                    <FiPower size={18} color="#E02041" />
                </button>         
 
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => ( // A cláusula map já contempla o "loop", ou seja para cada incident recebido no response rode o codigo abaixo. colocamos ( e não { para retornarmos direto o HTML se não teriamos que escrever o return. Adicione a cláusula "key" para conseguirmos fazer a manipulação dos casos (para deletar é uma boa)
                                    <li key={incident.id}>
                                    <strong>CASO:</strong>
                                    <p>{incident.title}</p>
                
                                    <strong>DESCRIÇÃO:</strong>
                                    <p>{incident.description}</p>
                
                                    <strong>VALOR:</strong>
                                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                
                                    <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                                       <FiTrash2 size={20} color="#a8a8b3"/>
                                     </button>
                                </li>
                ))} 
            </ul>
        </div>
    );

}