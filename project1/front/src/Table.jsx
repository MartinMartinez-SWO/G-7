import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';

function Table () {
    const [clientes, setClientes]  = useState([])

    useEffect( () => {
        axios.get('http://localhost:5066/list')
         .then( res => 
          setClientes(res.data)
         )
         .catch(error => console.log(error))
      
      }, [])

    return (
       <table className="table table-striped">
         <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Apelidos</th>
            </tr>
        </thead>
        <tbody>
            <>
            {
            clientes.map((cliente, i) => {
                return (
                <tr key = {i}>
                    <th scope="row">{cliente.id}</th>
                    <td>{cliente.name}</td>
                    <td>{cliente.apelidos}</td>
                </tr>
                )
            })
            }
            </>
        </tbody>
       </table>
    )
}

export default Table