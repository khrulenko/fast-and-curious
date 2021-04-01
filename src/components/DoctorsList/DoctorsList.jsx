import React from 'react';
import { DoctorCard } from '../DoctorCard/DoctorCard';
import './DoctorsList.css';

export const DoctorsList = ({ DoctorsToShow }) => {

  return (
    <ul
      className='doctorsList'
    >
      {DoctorsToShow.map(doctor => (
        <li
          key={doctor.id}
        >
          <DoctorCard
            doctor={doctor}
          />
        </li>
      ))}
    </ul>
  );
}
