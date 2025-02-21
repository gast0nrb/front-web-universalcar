import { useState } from "react";
import Button from "./Button";

const ButtonCards = ({setPosition, position}) => {
    return (
        <div className="col-span-2 justify-center flex gap-2">
            <Button position={position} setPosition={setPosition} value={0}/>
            <Button position={position} setPosition={setPosition} value={1}/>
            <Button position={position} setPosition={setPosition} value={2}/>
        </div>
    )
}

export default ButtonCards;