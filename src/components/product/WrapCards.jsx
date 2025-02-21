import { useState } from "react";
import Card from "../Card";
import ButtonCards from "./ButtonCards";

const WrapCards = () => {
    const [position, setPosition] = useState(0);
    return (
        <section className="grid grid-cols-2 md:gap-5 xs:gap-1 md:w-8/12 xs:w-11/12 mx-auto mb-5">
            <h2 className="col-span-2 text-center font-semibold text-zinc-300">Quizá estos te interesen...</h2>
            <Card title={"AAAA"}/>
            <Card title={"aaaa"}/>
            <ButtonCards setPosition={setPosition} position={position}/>
        </section>
    )
}

export default WrapCards;