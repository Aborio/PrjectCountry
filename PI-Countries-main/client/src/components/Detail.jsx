import {useEffect} from 'react';
import axios from 'axios';
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCountry } from './reducer/actions';

const Detail = () => {
    const { id } = useParams();
    const country = useSelector(state => state.sorting);
    console.log(country)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountry(id));
    }, [dispatch, id]);

    if(!country) return <h1>Loading...</h1>
    
    return(
        <div>
                {
                    country.map(
                        ({cca3,name,population,region,capital,flags}) => {
                            return(
                                <div key={cca3}>
                                    <h1>{name.common}</h1>
                                    <p>Population:{population}</p>
                                    <p>Region:{region}</p>
                                    <p>Capital:{capital}</p>
                                    <img src={flags[0]} alt="flag" width="100px" height="100px"/>
                                </div>
                            )
                        }
                    )
                }

        </div>

        )

                

            

        
    
}

export default Detail;

