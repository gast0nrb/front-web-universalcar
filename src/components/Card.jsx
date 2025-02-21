function Card({title}){
    return (
<div className="bg-zinc-900 drop-shadow-xl rounded-xs pb-1 group">
    <div className="p-1">
        <a href="/producto">
        <img className="rounded-t-xs" src="/90008.png" alt=""/>
        </a>
    </div>
    <div className="text-center border-b-1 border-zinc-700 group-hover:border-green-900 duration-150">
        <h3 className="font-bold text-green-100">{title.toUpperCase()}</h3>
    </div>
    <div className="grid grid-cols-2 text-zinc-300 text-xs text-center">
        <div className="">
            <p>Descuento</p>
            <p>0%</p>
        </div>
        <div className="">
            <p>Precio</p>
            <p>$1500</p>
        </div>
    </div>
</div>
)}
export default Card;
