import React, { useState, useEffect } from 'react';
import { DoctorsList } from './components/DoctorsList/DoctorsList';

import './App.css';

export function App() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors();
  }, []);

  function getDoctors() {
    return fetch(`https://5fe21e077a94870017682132.mockapi.io/api/testtask/doctors?page=1&limit=9`)
      .then(promise => promise.json())
        .then(doctors => setDoctors(doctors));
  }

  console.log(doctors);


  return (
    <>

    <div
      className="heading"
    >
      <h2>
        Наши специалисты
      </h2>

      <p
        className="description"
      >
        Высококвалифицированные врачи-стоматологи AstraDent регулярно посещают профессиональные
        мастер-классы и стажируются в Украине и за рубежом, чтобы быть в курсе всех современных тенденций
        дентальной медицины. Наши специалисты оснащены современной техникой мировых лидеров
        производства стоматологического оборудования и используют только высококачественные
        сертифицированные материалы от ведущих компаний.
      </p>

    </div>

      <DoctorsList
        DoctorsToShow={doctors}
      />
    </>
  );
}
