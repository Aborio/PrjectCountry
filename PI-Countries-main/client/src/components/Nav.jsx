import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav({ onSearch, setAccess }) {
    const navigate = useNavigate();
    const hanldeLogout = () => {
        setAccess(false);
        navigate("/");
    }
    return (
        <div className="navbar">
            <SearchBar onSearch={onSearch} />
        <button>
            <NavLink to="/about">About</NavLink>
        </button>
        
        <button onClick={hanldeLogout}>Logout</button>
        </div>
    ) 
}