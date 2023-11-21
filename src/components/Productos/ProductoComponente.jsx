
import ProductosJSON from "../../data/productos.json"
import Producto from "./Producto.jsx"

export default function ProductoComponente() {
  return (
    <>
    <form id="input" class="flex w-full justify-center gap-2 m-10">
    <div class="w-12">
        <img src="https://cdn-icons-png.flaticon.com/512/0/159.png" alt=""/>
    </div>
    <input class=" text-sm rounded-lg focus:ring-yellow-200 focus:border-yellow-200 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-200" placeholder="Buscar..." type="text"/>
    <button  class="w-12">
        <img class="" src="https://cdn-icons-png.flaticon.com/512/2311/2311526.png" alt=""/>
    </button>

    </form>
        { 
        ProductosJSON.productos.map(producto =>(
            <Producto nombre={producto.prod} img={producto.link} desc={producto.detalle}></Producto>
        ))
    }
    </>
    )
}
