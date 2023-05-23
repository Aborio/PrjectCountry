import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Paginado from "./Paginado";
import { getCountries, resetFilter , orderCards, filterByRegion, filterByActivity } from "../components/reducer/actions";


export default function AllData() {
    const dispatch = useDispatch();
    const country = useSelector(state=>state.countries)
    console.log(country)
    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);


    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState("");
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexOfLastCountry = currentPage * countriesPerPage; // esto es el current page 1 * 10 = 10 (el 10 viene del user state que arranca en 10)
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; // esto es el 10 - 10 = 0 (el 10 viene del user state que arranca en 10)
    const currentCountries = country.slice(indexOfFirstCountry, indexOfLastCountry); // esto me da de resultado un array de 10 paises

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    


    const handleFilter = (event) => {
        event.preventDefault();
        if(event.target.value === "All") dispatch(resetFilter());
        else dispatch(filterByRegion(event.target.value));
    } // esto es para filtrar por region y resetear el filtro

    const handleOrder = (event) => {
        event.preventDefault();
        dispatch(orderCards(event.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${event.target.value}`)
    }// esto es para ordenar las cards por nombre ascendente o descendente

    const handleReset = (event) => {
        event.preventDefault();
        dispatch(getCountries());
    } // esto es para resetear el filtro y volver a mostrar todos los paises

    const handleActivity = (event) => {
        event.preventDefault();
        dispatch(filterByActivity(event.target.value));
        setCurrentPage(1);
    } // esto es para filtrar por actividad

    

    return (
    <div className="data">
        <button onClick={handleReset}>
            All
        </button>
        <select onChange={handleOrder}>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
        <select onChange={handleActivity}>
            <option value="asc">Actividades</option>
            <option value="desc">None</option>
        </select>

        <Paginado
            countriesPerPage={countriesPerPage}
            allCountries={country.length}
            paginado={paginado}
        />

            

        
        {

            currentCountries?.map(
                ({id,name, continent,flag, activity}) => {
                    return (
                        <div className="card" key={id}>
                    <h1>{name}</h1>   
                    <h2>Region:{continent.slice(1, -1)}</h2>
                    {/* <h2>Region:{continent}</h2> La api puede funcionar mal, y tomar los valores con {}  */} 
                    <p>Activity: {activity.length > 0 ? activity[activity.length - 1] : ''}</p>
                    <img src={flag} alt="flag" width="100px" height="100px"/>
                 </div>   
                )
            }
        )
        }

    </div>
    );

}


