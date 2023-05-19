import './App.css';
import { Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import About from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';
import { useEffect } from 'react';
import Detail from './components/Detail';


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);

  const login =(userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/login'; // aca va a ir la url de la base de datos (la idea es hacer un Login y un register)
    axios(URL + `?email=${email}&password=${password}`)
    .then(({ data }) => {
       const { access } = data;
       setAccess(access);
       access && navigate('/home');
    });
 }

    useEffect(() => {
    !access && navigate('/');
    }, [access]);

  const [countries, setCountries] = useState([]);
  // const onSearch = (name) => {
  //   axios.get(`//localhost:3001/countries/${name}`).then(({ data }) => {
  //     if(data){
  //       setCountries((allCoun) => [...allCoun, data]);
  //     } else {
  //       alert('No se encontraron resultados')
  //     }
  //   });
  // };


  function onClose(id) {
    const countriesFiltered = countries.filter((c) => c.id !== id);
    setCountries(countriesFiltered);
 }

  return (
    <div className="App">
      {
        location.pathname !== '/' ?
      <Nav setAccess={setAccess} />
       : null}
      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/home" element={<Home onClose={onClose} />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
