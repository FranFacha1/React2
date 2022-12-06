import React from "react";

const Productos = (props) => {
    const {nombre, precio, descripcion} = props
    
    return (
        <div className="div-container">
            <div className="div-productos">
                <img className="img-productos"></img>
                <p className="p-nombre"></p>
                <p className="p-descripcion"></p>
                <p className="p-precio"></p>
            </div>
        </div>
    )
}

export default Productos;