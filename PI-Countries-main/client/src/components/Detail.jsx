import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCountry } from './reducer/actions';
import Style from './modules/detail.module.css'

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
                    country?.map(
                        ({id,name,population,region,capital,flag, continent, area, activity}) => {
                            return(
                                <div key={id} className={Style.container}>
                                    <h1>{name}</h1>
                                    <p>Population:{population}</p>
                                    <p>Region:{region}</p>
                                    <p>Capital:{capital}</p>
                                    <p>Contiente:{continent}</p>
                                    <p>Area:{area}</p>
                                    <p>Activity:{activity}</p>
                                    <img src={flag} alt="flag" width="100px" height="100px" className={Style.img}/>
                                </div>
                            )
                        }
                    )
                }

        </div>

        )

                

            

        
    
}

export default Detail;

