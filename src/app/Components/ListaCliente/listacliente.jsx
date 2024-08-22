import React from 'react';
import {Link}  from 'react-router-dom';
import './listacliente.css';

function ListaClientes(props){
    function deleteUser(id){
        alert('excluir usuario' + id);
    }


    return <table className="table table-hover table-bordered">
            <thead>
            <tr className="table-secondary">
                <th scope="col" className='col-acao-c'>Código</th>
                <th scope="col" className='col-acao-t'>Nome</th>
                <th scope="col" className='col-acao-e'>E-mail</th>
                <th scope="col" className='col-acao-t'>Telefone</th>
                <th scope="col"className='col-acao-t' >CNPJ</th>
                <th scope="col" className='col-acao'></th>
            </tr>
            </thead>
            <tbody>

            {
                props.arrayClientes.map((cliente) => {
                    return <tr key={cliente.id}>
                    <th scope="row">{cliente.id}</th>
                    <td>{cliente.nome}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.fone}</td>
                    <td>{cliente.cnpj}</td>

                    <td>
                        <Link to='#/'><i className='fas fa-edit icone-acao'></i></Link>
                        <Link to='#/' onClick={() => deleteUser(cliente.id)}><i className='far fa-trash-alt icone-acao red'></i> </Link>
                    </td>

                </tr>
                })
            }
                       
            
            </tbody>
        </table>
}

export default ListaClientes;