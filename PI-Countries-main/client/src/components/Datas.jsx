import Data from "./Data";
import { useSelector } from "react-redux";
export default function Datas() {

    
    const country = useSelector(state=>state.sorting)
    console.log(country)
   
   
    return (
    <div>
        {
        country?.map(
            ({id,name,population, region, capital,flag}) => {
                return (
                 <Data
                    key={id}
                    id={id}
                    name={name}
                    population={population}
                    region={region}
                    capital={capital}
                    flags={flag}
                    />
                )
            }
        )
     }
 
    </div>
    );
    
}