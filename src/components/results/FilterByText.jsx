const FilterByText = ({filterText, setTextFilter}) => {
    return (
        <div className="col-span-3 mx-auto flex gap-1">
            <p>Busqueda por texto:</p>
            <input value={filterText} type="text" className="text-center bg-neutral-700 rounded-xs" onChange={(e)=> setTextFilter(e.target.value)}/>
            <button onClick={(e)=> setTextFilter("")} className=""> <img className="w-4 pt-0.5" src="/exit.svg"/> </button>
        </div>
    )
}

export default FilterByText;
