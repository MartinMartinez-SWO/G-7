import React from "react";

function Table () {
    return (
       <table class="table table-striped">
         <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Apelidos</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Martín</td>
                <td>Martínez Martínez</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Zoi</td>
                <td>Betancourt Alfa</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Iván</td>
                <td>Eirea XOXO</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>César</td>
                <td>Guerra Neferten</td>
            </tr>
        </tbody>
       </table>
    )
}

export default Table