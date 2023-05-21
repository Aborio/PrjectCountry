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
    country: [],
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
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
  };


  




  useEffect(() => {
    dispatch(getActivities());
  }, []);


  
  return(
    <div>
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
          <select
            name="country"
            value={input.country}
            onChange={(e)=>handleChange(e)}
          >
            {countries?.map((e) => (
              <option value={e.id}>{e.name}</option>
            ))}
          </select>


        </div>

        <button type="submit">Crear</button>

      </form>

    </div>
  )


}

export default Create;

  

