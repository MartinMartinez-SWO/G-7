import React from "react";

function Table () {
    return (
       <table class="table table-striped">
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Apelidos</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Martín</td>
                <td>Martínez Martínez</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Zoi</td>
                <td>Betancourt Hernández</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Iván</td>
                <td>Eirea XOXO</td>
            </tr>
            <tr>
                <td>4</td>
                <td>César</td>
                <td>Guerra Méndez</td>
            </tr>
       </table>
    )
}

export default Table