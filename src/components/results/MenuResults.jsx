import { useState } from "react"
import FilterByText from "./FilterByText"
import ItemFilter from "./ItemFilter"
import MoreFilters from "./MoreFilters.jsx"

const MenuResults = ({filterText="Default filter text"}) => {
    const products = [
    {
    sku : "012311",
    title : "Ampolleta h4 pt43 12 volt",
    description : "Ampolleta modelo h4, 12 volt, pt43 55 watts",
    price : 4900,
    discount : 0, 
    codebar: "012311",
    url : "",
    Attributes_product : [
        {sku : "012311", id_attribute : 1 , value : "12 volt", Attribute : {id : 1, name : "Voltaje"}},
        {sku : "012311", id_attribute : 2 , value : 55, Attribute : {id : 2, name : "Watts"}},
    ],
    subcategory  : 1,
    Subcategory : {
        id : 1, 
        name : "Halogena",
        category : 1,
        Category : {id : 1, name : "Ampolletas"}
    }
},
{
    sku : "001",
    title : "Ampolleta 001",
    description : "Ampolleta 001",
    price : 4900,
    discount : 0, 
    codebar: "001",
    url : "",
    Attributes_product : [
        {sku : "001", id_attribute : 1 , value : "12 volt", Attribute : {id : 1, name : "Voltaje"}},
        {sku : "001", id_attribute : 2 , value : 55, Attribute : {id : 2, name : "Watts"}},
    ],
    subcategory  : 1,
    Subcategory : {
        id : 1, 
        name : "Halogena",
        category : 1,
        Category : {id : 1, name : "Ampolletas"}
    }
}
]
    const categories = [
        {id : 1, name : "Ampolletas"},
        {id : 2, name : "Seguridad"},
        {id : 3, name : "Audio"},
    ]
    const subcategories = [
        {id : 1, name :"Halogenas", category : 1},
        {id : 2, name :"Led", category : 1},
        {id : 3, name :"Parlantes", category : 3}
    ]
    
    const [textFilter, setTextFilter] = useState(filterText)
    const [useFilters, setUseFilters] = useState(false)
    return (
   <div className="mb-5">
       <div className="flex gap-1">
         <h2 className="text-center ml-auto text-lg mb-1 text-zinc-200 font-bold tracking-widest">Filtros</h2>
    <button 
    onClick={(e)=> setUseFilters(!useFilters)}
    className="rounded-xs text-xs block mr-auto my-auto bg-slate-950 text-neutral-100 px-1">{!useFilters ? "Utilizar filtros" : "Ocultar filtros" }</button>
</div> 
           <form hidden={!useFilters} onSubmit={(e)=> e.preventDefault()} className="w-11/12 mx-auto grid grid-cols-3 text-xs gap-2 text-zinc-300 mb-5 bg-neutral-900 p-2 rounded-xs">
        <FilterByText filterText={textFilter} setTextFilter={setTextFilter}/>
        <ItemFilter title="Categorias" values={categories}/>
        <ItemFilter title="Subcategorias" values={subcategories}/>
        <MoreFilters/>
       <div className="col-span-3 ml-auto">
            <button className="bg-black border-transparent border-y-1 px-1 hover:border-green-700 text-white">Aplicar filtros</button>
        </div>
    </form>
    </div>
    )
}
export default MenuResults
