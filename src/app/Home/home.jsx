import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/navbar';
import ListaClientes from '../Components/ListaCliente/listacliente';
import './home.css';
import 'firebase/firestore';

import firebase from '../Config/firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Home(){
  const [busca, setBusca] = useState('');
  const [texto, setTexto] = useState('');
  const [clientes, setClientes] = useState([]);
    

    useEffect(() => {
      let listaCli = [];
        const fetchData = async () => {
          const db = getFirestore(firebase);
          const clientesRef = collection(db, 'clientes');
          const snapshot = await getDocs(clientesRef);
          
          snapshot.forEach((doc) => {
            if (doc.data().nome.indexOf(busca) >= 0){
            listaCli.push({
                id: doc.id,
                nome: doc.data().nome,
                email: doc.data().email,
                fone: doc.data().fone,
                cnpj: doc.data().cnpj
                
          });
        }
        })
        setClientes(listaCli)
        
        };
        fetchData();
      }, [busca]);

  

    return <div>
      <Navbar/>
      <div className="container-fluid titulo">
        <h1>Cadastro de Clientes</h1>

        <div className='row'>
        <div className='col-4'>
        <Link to='/app/novocliente' className="btn btn-primary " type="button"><i className='fas fa-plus'></i> Cliente</Link>
        </div>


        <div className='col-8'>
          <div className="input-group mb-3">
          <input onChange={(e) => setTexto(e.target.value)} type="text" className="form-control" placeholder="Pesquisar por nome" aria-describedby="button-addon2" />
          <button onClick={(e) => setBusca(texto)} className="btn btn-primary" type="button" id="button-addon2"><i class="fas fa-search"></i> Pesquisar</button>
        </div>
        </div>
        
        <ListaClientes arrayClientes={clientes} />
        </div>
      </div> 
           
      </div>    
      
  }

export default Home;