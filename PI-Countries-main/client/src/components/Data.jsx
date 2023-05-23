// // import {Link} from 'react-router-dom';
// // import { useState, useEffect} from 'react';
// // import { useDispatch } from 'react-redux';
// import { NavLink } from "react-router-dom";


// function Data(props){
//     console.log(props)

//     return(
//         <div className="card">
//             <h1>{props.name}</h1>
//             <p>Region:{props.region}</p>
//             <img src={props.flags} alt="flag" width="100px" height="100px"/>
//             <NavLink to={`/detail/${props.id}`}><button>Ver detalle</button></NavLink>

           
//         </div>
        
//     )
// }

// export default Data;

import { NavLink } from "react-router-dom";
import { useState } from "react";

function Data(props) {
  const [showDiv, setShowDiv] = useState(true);

  function closeDiv() {
    setShowDiv(false);
  }

  return (
    <div>
      {showDiv && (
        <div className="card">
            <button onClick={closeDiv}>Cerrar</button>
          <h1>{props.name}</h1>
          <p>Region: {props.region}</p>
          <img src={props.flags} alt="flag" width="100px" height="100px" />
          <NavLink to={`/detail/${props.id}`}>
            <button>Ver detalle</button>
          </NavLink>
          
        </div>
      )}
    </div>
  );
}

export default Data;








