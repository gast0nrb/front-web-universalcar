const Category = (
{title, description, category, setCategory, id}
) => {
return (
<div class="mt-2">
    <div class="text-center">
        <button 
        onClick={(e)=> setCategory(id)}
        class={`md:text-lg xs:text-xs bg-zinc-800 drop-shadow-xl px-1 rounded-xs ${category == id ? "text-green-600" : "text-zinc-500"}`}>{title}</button>
    </div>
    <div>
        <p>{description}</p>
    </div>
</div>
)
}

export default Category;
