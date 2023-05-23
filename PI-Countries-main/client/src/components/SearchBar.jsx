import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "./reducer/actions";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState(""); // name es el valor del input
    const handleChange = (event) => {
        setName(event.target.value);
    } // cada vez que se escribe en el input, se actualiza el estado de name (por ejemplo cuando ponemos asd en el buscado, va tomando a as asd)
    
    const handleSubmit = () => {
        if(name){
            dispatch(getByName(name));
            document.getElementById("name").value = "";
        } // al apretar el submit toma el valor de name y lo manda a la action getByName de nuestro redux
    }
    return(
        <div className="searchBar">
            <input id="name" onChange={handleChange} type="search" value={name} placeholder="Busque aqui" />
            <button onClick={(event) => handleSubmit(event)}>Buscar</button>
        </div>

    )
}