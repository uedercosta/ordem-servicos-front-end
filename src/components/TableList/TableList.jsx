import React from "react";

export default function TableList() {
  return (
    <>
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
          <tr>
            <td>Id</td>
            <td>Nome</td>
            <td>Data Nascimento</td>
            <td>Ativo</td>
            <td>
              <button type="button" className="btn btn-info">Ativar</button>{" "}
              <button type="button" className="btn btn-warning">Editar</button>{" "}
              <button type="button" className="btn btn-danger">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>

    </>
  );
}
