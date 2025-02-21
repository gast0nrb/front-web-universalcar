const Button = ({setPosition, position , value}) => {
    return (
        <button onClick={(e)=> {
                setPosition(value)
                e.target.className = "animate-spin"
            setTimeout(()=> {
                e.target.className = ""
            }, 500)
        }} className="xs:w-4 md:w-5"> <img  src={`${ value == position ? "wheelActive.svg" : "wheel.svg" }`} alt="" /></button>
    )
}

export default Button;