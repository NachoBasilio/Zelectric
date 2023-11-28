
export default function Producto({nombre, img, desc}) {
  return (
    <div className="flex flex-col items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pl-5 pt-2 text-center">{
            nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase()
        }</h5>

        <img className="rounded-t-lg" src={img} alt="" />
        
        <div className="p-5">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        </div>

        <a className="text-blue-800 mb-2" href="#">Leer mas</a>
    </div>
  )
} 
