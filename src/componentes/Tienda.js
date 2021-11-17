import React from 'react';
import Productos from './Productos';
const Tienda = ({ productos, agregarProducto }) => {
    return (
        <>
            <h1>Tienda</h1>
            <Productos
                productos={productos}
                agregarProducto={agregarProducto}
            />

        </>
    );

}
export default Tienda;