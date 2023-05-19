import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "./reducer/actions";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const handleChange = (event) => {
        setName(event.target.value);
        console.log(name)
    }

    const handleSubmit = () => {
        if(name){
            dispatch(getByName(name));
            document.getElementById("name").value = "";
        }
    }
    return(
        <div>
            <input id="name"onChange={handleChange} type="search" value={name} placeholder="Busque aqui" />
            <button onClick={(event) => handleSubmit(event)}>Buscar</button>
        </div>

    )
}