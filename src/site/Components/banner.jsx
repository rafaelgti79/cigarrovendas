import React from 'react';


function Banner(){
    return <section id="banner">
        <div className="container">
            <div className="row">

            <div className="col-lg-6">
                    <h1>Plataforma para vendas de Cigarro On-line.</h1>
                    <h4>Cadastro de Clientes e Gerenciamento</h4>
                    <a href='/app' className="btn btn-outline-light btn-lg btn-banner">Fazer Login</a>
                </div>

                <div className="col-lg-6">
                    <img src="/Images/screenshot-crm.png" alt='pesquisa' />
                </div>

            </div>
        </div>

    </section>;
  }

export default Banner;