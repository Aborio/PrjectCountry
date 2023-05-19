import Datas from "./Datas"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../components/reducer/actions";
import AllData from "./AllData";

const Home = () => {
    

    
    const dispatch = useDispatch();
    useEffect(() => {

    dispatch(getCountries());
    }, []);

    return(
        <div>
            <h1>Home</h1>
            <Datas/>
            <AllData/>
        </div>
    
    )
}

export default Home;