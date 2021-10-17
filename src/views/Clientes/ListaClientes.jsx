
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import api from "../../services/api";


function ListaClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    api
      .get("/clientes")
      .then(response => {
        setClientes(response.data)
      })
      .catch((erros) => {
        console.log(erros);
      });
  }, []);

  function cadastrar(){
      useHistory("/clientes/form");
  }

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <h1>Lista de clientes</h1>
        <hr />

        <div className="row">
          <div className="form-group mb-11">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Digite o texto para a pesquisa"
                aria-label="Digite o texto para a pesquisa"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                id="button-addon2"
              >Pesquisar</button>

              <span>&nbsp;</span>
              <button className="btn btn-outline-success" 
                      type="button"
                      onClick={cadastrar}>Adicionar</button>
            </div>
            <table className="table table-hover table-stripped">
              <thead>
                <tr>
                  <td>Id</td>
                  <td>Nome</td>
                  <td>Data Nascimento</td>
                  <td>Ativo</td>
                  <td>Ações</td>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente) => {
                    return (
                        <tr key={cliente.id}> 
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.dataNascimento}</td>
                            <td>{cliente.ativo}</td>
                            <td>
                                <button type="button" class="btn btn-info">Ativar</button>{" "}
                                <button type="button" class="btn btn-warning">Editar</button>{" "}
                                <button type="button" class="btn btn-danger">Excluir</button>
                            </td>
                        </tr>
                    );
                })} 
             
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListaClientes;
