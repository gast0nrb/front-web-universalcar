const Category = (
{title, description, category, setCategory, id}
) => {
return (
<div className="mt-2">
    <div className="text-center">
        <button 
        onClick={(e)=> setCategory(id)}
        className={`md:text-sm xs:text-xs bg-zinc-800 drop-shadow-xl px-1 rounded-xs border-1 border-zinc-700 ${category == id ? "text-green-600" : "text-zinc-500"}`}>{title}</button>
    </div>
    <div>
        <p>{description}</p>
    </div>
</div>
)
}

export default Category;
