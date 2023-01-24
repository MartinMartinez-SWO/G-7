import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';

function Table () {
    const [clientes, setClientes]  = useState([]);

    const [clientesFormu, setClientesFormu]  = useState({
        nombre: " ",
        apellidos: " "
    });

    const {nombre, apellidos} = clientesFormu;

    useEffect( () => {
        axios.get('http://localhost:5066/list')
         .then( res => 
          setClientes(res.data)
         )
         .catch(error => console.log(error))
      
      }, [])

    // Botón LISTAR
      const handleClickListar = () => {
        let tabla = document.getElementById("tabla");

        if (tabla.style.display === 'block') {
            tabla.style.display = "none";
        } else {
            tabla.style.display = "block";
        }
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Estamos dentro de matrix")
        axios.post('http://localhost:5066/save', clientesFormu)
         .then( res => console.log(res))
         .catch(error => console.log(error))
    }

    // Botón GUARDAR
    const handleChange = (e) => {
       e.preventDefault();
       const nombreInput    = e.target.name;
       const apellidosInput = e.target.value;
       setClientesFormu({ ...clientesFormu, [nombreInput]: apellidosInput})
       console.log(clientesFormu.name);
      }

      return (
        <>

        {/* Tabla */}
        <table id="tabla" className="table table-striped">
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
        
        {/* Formulario */}
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" onChange={handleChange} className="form-control" name="name" value={clientesFormu.name}/>
            </div>
            <div className="mb-3">
            <label className="form-label">Apellidos</label>
              <input type="text" onChange={handleChange} className="form-control" name="apelidos" value={clientesFormu.apelidos}/>
            </div>
            <button type="submit" className="btn btn-success">Guardar</button>
        </form>
        <br />

        {/* Botones */}
        <div className="d-grid gap-2 col-6 mx-auto">
            <button onClick={handleClickListar}  type="button" className="btn btn-primary">Listar</button>
        </div>
        </>
    )
}

export default Table