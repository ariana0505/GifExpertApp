import { useState } from "react"

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('Hola')

    return (
        <>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            // onChange={}
        />
        </>
    )
}