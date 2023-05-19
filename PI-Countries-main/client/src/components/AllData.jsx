import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Paginado from "./Paginado";
import { getCountries, resetFilter , orderCards, filterByRegion } from "../components/reducer/actions";


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
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = country.slice(indexOfFirstCountry, indexOfLastCountry);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    const handleFilter = (event) => {
        event.preventDefault();
        if(event.target.value === "All") dispatch(resetFilter());
        else dispatch(filterByRegion(event.target.value));
    }

    const handleOrder = (event) => {
        event.preventDefault();
        dispatch(orderCards(event.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${event.target.value}`)
    }

    const handleReset = (event) => {
        event.preventDefault();
        dispatch(getCountries());
    }

    

    return (
    <div>
        <button onClick={handleReset}>
            All
        </button>
        <select onChange={handleOrder}>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>

        <Paginado
            countriesPerPage={countriesPerPage}
            allCountries={country.length}
            paginado={paginado}
        />



        {
        currentCountries.map(
            ({cca3,name, region,flag}) => {
                return (
                 <div key={cca3}>
                    <h1>{name}</h1>   
                    <p>Region:{region}</p>
                    <img src={flag } alt="flag" width="100px" height="100px"/>
                 </div>   
                )
            }
        )
        }

        {/* <select onChange={handleOrder}>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Polar">Polar</option>
        </select> */}


    </div>
    );

}

