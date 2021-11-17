import React from 'react';
import styled from 'styled-components';
const Carrito = ({ productos }) => {
    return (
        <div>
            <h3>Carrito de compras</h3>
            {productos.length > 0
                ?
                productos.map((producto, index) => (
                    <Producto key={producto.id}>
                        <NombreProducto>{producto.nombre}</NombreProducto>
                        Cantidad: {producto.cantidad}
                    </Producto>
                ))
                :
                <p>Aún no tienes productos en el carro</p>
            }
        </div>
    );
}


const Producto = styled.div`
 padding: 10px;
 border-bottom: 1px solid #ebebf3;
 font-size: 14px;
`;

const NombreProducto = styled.p`
  font-weight:bold;
  font-size:16px;
  color:#000;
`;
export default Carrito;