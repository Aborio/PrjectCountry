import Data from "./Data";
import { useSelector } from "react-redux";
export default function Datas() {

    
    const country = useSelector(state=>state.sorting)
   
   
    return (
    <div>
        {
        country.map(
            ({cca3,name,population,region, capital,flags}) => {
                return (
                 <Data
                    key={cca3}
                    id={cca3}
                    name={name.common}
                    population={population}
                    region={region}
                    capital={capital}
                    flags={flags[0]}
                    />
                )
            }
        )
     }
 
    </div>
    );
    
}