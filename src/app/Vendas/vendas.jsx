import React, { useState } from 'react';
import Navbar from '../Components/Navbar/navbar';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {Link, Navigate, }  from 'react-router-dom';
import './vendas.css';

function Vendas(){

  const [cliente, setCliente] = useState('');
  const [produtos, setProdutos] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [endereço, setEndereço] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [vendedor, setVendedor] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState('N');


  const db = getFirestore();
  const dbRef = collection(db, "vendas");
 
  
  function CadastrarPedido(){

    const data = {
      cliente: cliente,
      produtos: produtos,
      quantidade: quantidade,
      cnpj: cnpj,
      endereço: endereço,
      vendedor: vendedor

   };
    addDoc(dbRef, data)
              
      .then(() => {
          setMensagem('');
          setSucesso('S');
        }).catch((erro) =>{
          setMensagem(erro);
          setSucesso('N');
        });
      
    }

    return <div>
        <Navbar/>
        <div className="container-fluid titulo">

          <div className="offset-lg-3 col-lg-6">
            <h1>Pedidos</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Cliente</label>
                <input onChange={(e) => setCliente(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />              
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Produto</label>
                <input onChange={(e) => setProdutos(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />              
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Quantida</label>
                <input onChange={(e) => setQuantidade(e.target.value)}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />              
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">CNPJ</label>
                <input onChange={(e) => setCnpj(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />              
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Endereço</label>
                <input onChange={(e) => setEndereço(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />              
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Vendedor</label>
                <input onChange={(e) => setVendedor(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />              
              </div>

              <div className="text-center">
                <Link to="#/" className="btn btn-outline-primary btn-acao">Cancelar</Link>
                <button onClick={CadastrarPedido} type="button" className="btn btn-primary btn-acao">Salvar</button>
              </div>

              {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
              {sucesso === 'S' ? <Navigate to='/app/home' /> : null}
              
            </form>
          </div>
        </div>
    </div>;  
  }

export default Vendas;