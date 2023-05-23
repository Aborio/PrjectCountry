import SearchBar from "./SearchBar";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Styles from './modules/botones.module.css'

export default function Nav({ onSearch, setAccess }) {
    const navigate = useNavigate();
    const hanldeLogout = () => {
        setAccess(false);
        navigate("/");
    }


    return (
        <div className="navbar">
            <SearchBar onSearch={onSearch} />
       
            <NavLink to="/about">
            <button className={Styles.btn} >
                        <span className={Styles.shadow}></span>
                        <span className={Styles.edge}></span>
                        <span className={Styles.front}>About</span>
                    </button>
                    </NavLink>
        
        
            <NavLink to="/home">
            <button className={Styles.btn} >
                        <span className={Styles.shadow}></span>
                        <span className={Styles.edge}></span>
                        <span className={Styles.front}>Home</span>
                    </button>
                
            </NavLink>
     

        
            <NavLink to="/create">
            <button className={Styles.btn} >
                        <span className={Styles.shadow}></span>
                        <span className={Styles.edge}></span>
                        <span className={Styles.front}>Create Activity</span>
                    </button>
                </NavLink>
        
    
                <button onClick={hanldeLogout} className={Styles.btn} >
                        <span className={Styles.shadow}></span>
                        <span className={Styles.edge}></span>
                        <span className={Styles.front}>LogOut</span>
                    </button>
        </div>
    ) 
}