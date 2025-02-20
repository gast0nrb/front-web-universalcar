import Category from "./Category"
import Card from "../Card"
import { useState } from "react"

const WrapCategories = () => {
    const [category, setCategory] = useState(1)
    return (
<section class="xs:mt-10 md:mt-30 w-10/12 mx-auto" id="products">
    <h2 class="w-fit text-neutral-200 bg-neutral-900 px-4 rounded-xs mx-auto font-bold xs:text-xl md:text-3xl border-b-2 border-green-500">¿QUÉ VENDEMOS?</h2>
    <div class="flex flex-wrap gap-1 justify-center">
        <Category title="Repuestos" description="" id={1} category={category} setCategory={setCategory}/>
        <Category title="Repuestos" description="" id={2} category={category} setCategory={setCategory}/>
        <Category title="Repuestos" description="" id={3} category={category} setCategory={setCategory}/>
        <Category title="Repuestos" description="" id={4} category={category} setCategory={setCategory}/>
        <Category title="Repuestos" description="" id={5} category={category} setCategory={setCategory}/>
        <Category title="Repuestos" description="" id={6} category={category} setCategory={setCategory}/>
        <Category title="Repuestos" description="" id={7} category={category} setCategory={setCategory}/>
        <Category title="Repuestos" description="" id={8} category={category} setCategory={setCategory}/>
        <Category title="Repuestos" description="" id={9} category={category} setCategory={setCategory}/>
        <Category title="Repuestos" description="" id={10} category={category} setCategory={setCategory}/>
        <Category title="Repuestos" description="" id={11} category={category} setCategory={setCategory}/>
        <Category title="Repuestos" description="" id={12} category={category} setCategory={setCategory}/>
        <Category title="Repuestos" description="" id={13} category={category} setCategory={setCategory}/>
        <Category title="Repuestos" description="" id={14} category={category} setCategory={setCategory}/>
        <Category title="Repuestos" description="" id={15} category={category} setCategory={setCategory}/>
        <Category title="Repuestos" description="" id={16} category={category} setCategory={setCategory}/>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mt-5">
        <Card title="aaa"/>
        <Card title="aaa"/>
        <Card title="aaaa"/>
    </div>
</section>
    )
}

export default WrapCategories;