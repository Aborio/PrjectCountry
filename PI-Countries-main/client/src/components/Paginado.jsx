import React from "react";

export default function Paginado({countriesPerPage, allCountries, paginado}){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <nav className="controlP">
            <ul className="paginado">
                {pageNumbers &&
                pageNumbers.map(number => (
                    <li key={number} className="paginado">
                    <a className="paginado1" onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
