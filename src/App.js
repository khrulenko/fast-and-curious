import React, { useState, useEffect } from 'react';
import { DoctorsList } from './components/DoctorsList/DoctorsList';
import ReactPaginate from 'react-paginate';

import './App.css';

export function App() {
  const [doctors, setDoctors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getDoctors();
  }, [currentPage]);

  function getDoctors() {
    return fetch(`https://5fe21e077a94870017682132.mockapi.io/api/testtask/doctors`)
      .then(promise => promise.json())
        .then(doctors => setDoctors(doctors));
  };

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
        Высококвалифицированные врачи-стоматологи AstraDent регулярно посещают
        профессиональные мастер-классы и стажируются в Украине и за рубежом,
        чтобы быть в курсе всех современных тенденций дентальной медицины.
        Наши специалисты оснащены современной техникой мировых лидеров
        производства стоматологического оборудования и используют только
        высококачественные сертифицированные материалы от ведущих компаний.
      </p>

    </div>

    <DoctorsList
      DoctorsToShow={doctors.slice(
        (currentPage - 1) * 9,
        ((currentPage - 1) * 9) + 9
      )}
    />

    <ReactPaginate
      onPageChange={(e) => setCurrentPage(e.selected + 1)}
      pageCount={Math.ceil(doctors.length / 9)}
      containerClassName={"pagination"}
      pageClassName={"paginationPage"}
      previousClassName={"paginationPrevious"}
      nextClassName={"paginationNext"}
      breakClassName={"paginationEllipsis"}
      activeClassName={"paginationActive"}
      pageLinkClassName={"paginationLink"}
    />

    </>
  );
}
