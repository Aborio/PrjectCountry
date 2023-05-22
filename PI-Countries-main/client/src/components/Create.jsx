import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "./reducer/actions";
import { postActivity } from "./reducer/actions";




const Create = () => {
  const dispatch = useDispatch();
  const actividades = useSelector((state) => state.activities);
  const countries = useSelector((state) => state.countries);
  const [input, setInput] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    country: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value.toString(),
    });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(postActivity(input));
      alert("Actividad creada con exito");
      setInput({
        name: "",
        dificulty: "",
        duration: "",
        season: "",
        country: [],
      });

      console.log(input)
  };


  




  useEffect(() => {
    dispatch(getActivities());
  }, []);


  
  return(
    <div className="formact">
      <h1>Crear Actividad</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <label>Nombre</label>
          <input 
          type="text" 
          value={input.name}
          name="name"
          onChange={(e)=>handleChange(e)} />
        </div>
        <div>
          <label>Dificultad</label>
          <input
            type="number"
            value={input.dificulty}
            name="dificulty"
            onChange={(e)=>handleChange(e)}
          />
        </div>
        <div>
          <label>Duracion</label>
          <input
            type="number"
            value={input.duration}
            name="duration"
            onChange={(e)=>handleChange(e)}
          />
        </div>
        <div>
          <label>Temporada</label>
          <input
            type="text"
            value={input.season}
            name="season"
            onChange={(e)=>handleChange(e)}
          />
        </div>
        <div>
          <label>Pais</label>
          {/* <input 
          type="text"
          name="country" 
          value={input.country}
          onChange={(e)=>handleChange(e)}/> */}
            <select
            value={input.country}
            name="country"
            onChange={(e) => handleChange(e)}
            >
          <option value="">Seleccione un país</option>
          {countries.map((country) => (
          <option value={country.id} key={country.id}>
          {country.name}
          </option>
          ))}
          </select>
        </div>

        <button type="submit">Crear</button>

      </form>

    </div>
  )


}

export default Create;

  

