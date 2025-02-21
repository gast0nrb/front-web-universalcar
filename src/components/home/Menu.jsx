import { useState } from "react";

const Menu = () => {
    const [show, setShow] = useState(true)
    return (
        <div class="text-center right-0 left-0 fixed bottom-5 z-1 opacity-20 group hover:opacity-100 w-fit mx-aut mx-auto">
            <ul className="bg-black w-fit mx-auto rounded-xs text-zinc-200 px-1" hidden={show}>
               <a href="/home"><li className="border-b-2 border-zinc-800 hover:border-green-900">Inicio</li></a>
                <li className="border-b-2 border-zinc-800 hover:border-green-900">Categorias</li>
                <li className="border-b-2 border-zinc-800 hover:border-green-900">Ayuda</li>
            </ul>
            <h3 className="text-zinc-200 text-xs my-1">{show ? "Menu" : "Cerrar" }</h3>
            <button 
            onClick={(e)=> setShow(!show)}
            class={`text-xs ${show ? "" : "bg-black rounded-xl"}`}><img class="w-5"  src={`${show ? "/menu.svg" : "collapse.svg" }`}/></button>
        </div>
    )
}

export default Menu;
