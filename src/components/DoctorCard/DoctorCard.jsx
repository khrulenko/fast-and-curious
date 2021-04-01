import React from 'react';
import './DoctorCard.css';

export const DoctorCard = ({ doctor }) => {

  return (
    <li
      key={doctor.id}
    >

      <a
        className="doctorCard"
        href={doctor.link}
      >

        <img
          className='doctorPhoto'
          src={doctor.avatar}
          alt={`doctor ${doctor.firstName} ${doctor.lastName}`}
        >
        </img>

        <p
          className="doctorName"
        >
          {doctor.firstName} {doctor.lastName}
        </p>

        <p
          className="speciality"
        >
          {`${
              typeof(doctor.speciality) === 'object'
              ? doctor.speciality.join(' • ')
              : doctor.speciality
            }`
          }
        </p>

      </a>


    </li>
  );
}
