import React, { useState, useEffect } from 'react';
import { DoctorsList } from './components/DoctorsList/DoctorsList';
import ReactPaginate from 'react-paginate';

import './App.scss';

export function App() {
  const [doctors, setDoctors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const amountPerPage = 9;

  useEffect(() => {
    getAllDoctors();
  }, [currentPage]);

  function getAllDoctors() {
    return fetch("https://5fe21e077a94870017682132.mockapi.io/api/testtask/doctors")
      .then(promise => promise.json())
        .then(doctors => setDoctors(doctors));
  };

  function getDoctorsToShow(doctors, amountPerPage) {
    return doctors.slice(
      (currentPage - 1) * amountPerPage,
      ((currentPage - 1) * amountPerPage) + amountPerPage
    )
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
        DoctorsToShow={getDoctorsToShow(doctors, amountPerPage)}
      />

      {!!doctors.length && <ReactPaginate
        onPageChange={(e) => setCurrentPage(e.selected + 1)}
        pageCount={Math.ceil(doctors.length / amountPerPage)}
        containerClassName={"pagination"}
        pageClassName={"paginationPage"}
        previousClassName={"paginationPrevious"}
        nextClassName={"paginationNext"}
        breakClassName={"paginationEllipsis"}
        activeClassName={"paginationActive"}
        pageLinkClassName={"paginationLink"}
        previousLinkClassName={"paginationPreviousLink"}
        nextLinkClassName={"paginationNextLink"}
        previousLabel={"<"}
        nextLabel={">"}
        disabledClassName={"paginationDisabled"}
      />}
    </>
  );
}
