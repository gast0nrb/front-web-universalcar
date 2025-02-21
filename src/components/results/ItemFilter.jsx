const ItemFilter = ({title, values}) => {
    return (
        <div className="text-center">
            <p className="font-semibold">{title}</p>
            <select className="text-center text-zinc-300 bg-neutral-700 rounded-xs px-1">
                {values.map((v)=> <option>{v.name}</option>)}
            </select>
        </div>
       
    )
}

export default ItemFilter
