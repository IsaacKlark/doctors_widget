import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './DoctorPage.scss';

const DoctorPage = () => {
    const [doctor, setDoctor] = useState(null);
    const location = useLocation();
    const [didMount, setDidMount] = useState(false);
    const searchParams = new URLSearchParams(location.search);
    const [id] = useState(searchParams.get('id'));

    useEffect(() => {
        setDidMount(true);
        axios.get('https://5fe21e077a94870017682132.mockapi.io/api/testtask/doctors')
            .then(res => {
                setDoctor(res.data.find(doctor => doctor.id === id))
            })
        return () => setDidMount(false);
    }, [id]);

    if (!didMount) return null;
    
    const speciality = doctor && typeof (doctor.speciality) === 'string'
        ? doctor.speciality
        : doctor?.speciality.join(' • ');

    return (
        <main className="doctorPage">
            { doctor
                ? <>
                    <img
                        src={doctor.avatar}
                        alt={doctor.firstName + " " + doctor.lastName}
                        className="doctorPage__image"
                    />
                    <p className="homeCardsWrapper__name">
                        {doctor.firstName + " " + doctor.lastName}
                    </p>
                    <p className="doctorPage__specialization">
                        {speciality}
                    </p>
                </>
                : null
            }
        </main>
    )
}

export default DoctorPage;
