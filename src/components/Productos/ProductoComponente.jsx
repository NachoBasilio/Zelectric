import { useState } from 'preact/hooks';
import ProductosJSON from "../../data/productos.json"
import Producto from "./Producto.jsx"


export default function ProductoComponente() {
    const [productos, setProductos] = useState(ProductosJSON);

    const handlerClick = (e) => {
        e.preventDefault()
        console.log(e)
    }

  return (
    <div class="mt-10 flex flex-col xl:flex-row flex-wrap gap-4 justify-center items-center"	>
    <form 
    onSubmit={(e) => {
        e.preventDefault()
        console.log(e)
    }}
    id="input" 
    className="flex w-full justify-center gap-2 m-10">
    <div className="w-12">
        <img src="https://cdn-icons-png.flaticon.com/512/0/159.png" alt=""/>
    </div>
    <input
        className=" text-sm rounded-lg focus:ring-yellow-200 focus:border-yellow-200 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-200" 
        placeholder="Buscar..." 
        type="text"
    />
    <button  className="w-12">
        <img className="" src="https://cdn-icons-png.flaticon.com/512/2311/2311526.png" alt=""/>
    </button>

    </form>
    { 
        productos.productos.map(producto =>(
            <Producto nombre={producto.prod} img={producto.link} desc={producto.detalle}></Producto>
        ))
    }
    </div>
    )
}
