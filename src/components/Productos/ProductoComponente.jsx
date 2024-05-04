
import { useState } from "react";
import ProductosJSON from "../../data/productos.json";
import Producto from "./Producto.jsx";

export default function ProductoComponente() {
  const productos = ProductosJSON.productos;
  const [productosFiltrados, setProductosFiltrados] = useState(productos);

  const handlerClick = (e) => {
    e.preventDefault();
    const valor = e.target.value.toLowerCase();
    filterProductos(valor);
  };

  const filterProductos = (valor) => {
    const arrayFiltrado = productos.filter((prod) =>
      prod.prod.toLowerCase().includes(valor)
    );
    setProductosFiltrados(arrayFiltrado);
  };

  return (
    <div className="mt-2 flex flex-col xl:flex-row flex-wrap gap-4 justify-center items-center mb-20">
      <form
        id="input"
        className="flex dark:text-white   w-4/5 lg:w-full justify-center gap-2 m-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="w-12">
          <img src="https://cdn-icons-png.flaticon.com/512/0/159.png" alt="" />
        </div>
        <input
          onChange={handlerClick}
          className="text-sm rounded-lg ring-yellow-zelectric border-yellow-zelectric focus:ring-yellow-200 focus:border-yellow-200 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-200"
          placeholder="Buscar..."
          type="text"
        />
        <button type="submit" className="w-12">
          <img
            className=""
            src="https://cdn-icons-png.flaticon.com/512/2311/2311526.png"
            alt=""
          />
        </button>
      </form>
      {productosFiltrados.map((producto) => (
        <Producto
          key={producto.id}
          id = {producto.id}
          nombre={producto.prod}
          img={producto.link}
          desc={producto.detalle}
        ></Producto>
      ))}
    </div>
  );
}