import React, { useState, useEffect } from 'react';
import  { collection, getFirestore, getDocs } from 'firebase/firestore';
import './consultapedidos.css';
import Navbar from '../Components/Navbar/navbar';


import firebase from '../Config/firebase'



function ConsultaPedidos(){
    
    const [clientes, setClientes] = useState([]);
    

    useEffect(() => {
      let listaCli = [];
        const fetchData = async () => {
          const db = getFirestore(firebase);
          const clientesRef = collection(db, 'vendas');
          const snapshot = await getDocs(clientesRef);
          
          snapshot.forEach((doc) => {
            listaCli.push({
                id: doc.id,
                cliente: doc.data().cliente,
                cnpj: doc.data().cnpj,
                endereço: doc.data().endereço,
                produto: doc.data().produto,
               quantidade: doc.data().quantidade,
                vendedor: doc.data().vendedor
                
                
          });
        
        })
        setClientes(listaCli)
        
        };
        fetchData();
      }, []);

      
    return <div>
            <div className="container-fluid titulo" >
                <Navbar/>
            </div>
             <table className="table table-hover table-bordered">
            <thead>
            <tr className="table-secondary">
                <th scope="col">Cliente</th>
                <th scope="col">Produto</th>
                <th scope="col">Quantidade</th>
                <th scope="col">CNPJ</th>
                <th scope="col">Endereço</th>
                <th scope="col">Vendedor</th>

            </tr>
            </thead>
            <tbody>

            {
                clientes.map((cliente) => {
                    return <tr key={cliente.id}>
                    <th scope="row">{cliente.cliente}</th>
                    <td>{cliente.produto}</td>
                    <td>{cliente.quantidade}</td>
                    <td>{cliente.cnpj}</td>
                    <td>{cliente.endereço}</td>
                    <td>{cliente.vendedor}</td>
                    

                </tr>
                })
            }
                       
            
            </tbody>
        </table>
        </div>
}

export default ConsultaPedidos;