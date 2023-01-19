import React from "react";

const handleClick = () => {
    
}

function Buttons () {
    return (
        <div className="d-grid gap-2 col-6 mx-auto">
            <button onClick={handleClick} type="button" className="btn btn-primary">Listar</button>
            <button type="button" className="btn btn-success">Guardar</button>
        </div>
    )
}

export default Buttons