
import React, { useState } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Blog from './componentes/Blog';
import Error404 from './componentes/Error404';
import Inicio from './componentes/Inicio';
import Tienda from './componentes/Tienda';
import Carrito from './componentes/Carrito';

function App() {
  const productos = [
    { id: 1, nombre: "Producto 1" },
    { id: 2, nombre: "Producto 2" },
    { id: 3, nombre: "Producto 3" },
    { id: 4, nombre: "Producto 4" },
    { id: 5, nombre: "Producto 5" }
  ];
  const [carrito, cambiarCarrtio] = useState([]);

  const agregarProducto = (id, nombre) => {
    //si el carrito no tiene elementos
    if (carrito.length === 0) {
      cambiarCarrtio([{ id: id, nombre: nombre, cantidad: 1 }]);
    } else {
      //acumular la cantidad si es el mismo producto
      const nuevoCarrito = [...carrito];
      //buscar si tiene el id 
      const fproductoCarrito = nuevoCarrito.filter((producto) => {
        return producto.id === id;
      }).length > 0;
      //si ya esta en carrito lo actualizamos
      if (fproductoCarrito) {

        nuevoCarrito.forEach((producto, index) => {
          if (producto.id === id) {
            let cantidad = nuevoCarrito[index].cantidad;
            nuevoCarrito[index] = {
              id: id,
              nombre: nombre,
              cantidad: cantidad + 1
            };
          }
        });

      } else {
        //es un producto nuevo se agrega normal
        nuevoCarrito.push({ id: id, nombre: nombre, cantidad: 1 });

      }
      //actualizar estado
      cambiarCarrtio(nuevoCarrito);
    }
  }

  return (
    <Contenedor>
      <Menu>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/tienda">Tienda</NavLink>
      </Menu>
      <main>
        <Switch>
          <Route path="/" exact={true} component={Inicio} />
          <Route path="/blog" component={Blog} />
          <Route path="/tienda">
            <Tienda
              productos={productos}
              agregarProducto={agregarProducto}
            />
          </Route>
          <Route component={Error404} />
        </Switch>
      </main>
      <aside>
        <Carrito productos={carrito} />
      </aside>
    </Contenedor>
  );
}

const Contenedor = styled.div`
	max-width: 1000px;
	padding: 40px;
	width: 90%;
	display: grid;
	gap: 20px;
	grid-template-columns: 2fr 1fr;
	background: #fff;
	margin: 40px 0;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
	width: 100%;
	text-align: center;
	background: #092c4c;
	grid-column: span 2;
	border-radius: 3px;

	a {
		color: #fff;
		display: inline-block;
		padding: 15px 20px;
	}

	a:hover {
		background: #1d85e8;
		text-decoration: none;
	}
`;
export default App;
