import { useState } from "react"
import ItemFilter from "./ItemFilter"

const MoreFilters = ({values}) => {
    const colors = [{name : "azul"}]
    const volts = [{name : "12 volt"}]
    const amperaje = [{name : "55w"}]
    const [showFilter, setShowFilter] = useState(false)
    return (
        <div className="col-span-3 text-center">
            <button 
            className="bg-neutral-900 px-1 rounded-xs text-zinc-500 hover:text-zinc-400"
            onClick={(e)=> {
                setShowFilter(!showFilter)
                }}>{!showFilter? "Más filtros": "Ocultar filtros"}</button>
            <div className="col-span-3 grid grid-cols-3" hidden={!showFilter}>
                <ItemFilter title="Color" values={colors}/>
                <ItemFilter title="Voltaje" values={volts}/>
                <ItemFilter title="Amperaje" values={amperaje}/>
            </div>
        </div>
    )
}

export default MoreFilters
