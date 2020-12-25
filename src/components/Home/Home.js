import React, { useEffect, useState } from 'react';
import './Home.scss';
import home from '../../images/home.png';
import next from '../../images/next.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [doctors, setDoctors] = useState([]);
    const [doctorsPage, setDoctorsPage] = useState(1);

    useEffect(() => {
        axios.get('https://5fe21e077a94870017682132.mockapi.io/api/testtask/doctors')
            .then(res => {
                setDoctors(res.data);
            })
    }, []);

    const prevDoctorsPage = () => {
        if (doctorsPage > 1) {
            setDoctorsPage(doctorsPage - 1);
        }
    }

    const nextDoctorsPage = () => {
        if (doctors.length - doctorsPage * 10 > 0) {
            setDoctorsPage(doctorsPage + 1)
        }
    }

    return (
        <main>
            <section className="homeTop">
                <div className="homeTop__info">
                    <div className="breedcrumps">
                        <img src={home} alt="home" className="breedcrumps__home" />
                        <p className="breedcrumps__textMain">
                            Главная
                        </p>
                        <img src={next} alt="to" className="breedcrumps__next" />
                        <p className="breedcrumps__text">
                            О нас
                        </p>
                    </div>
                    <h1 className="homeTop__about">
                        О лаборатории Astra Dent
                    </h1>
                </div>

                <aside className="homeTop__aside">
                    <h1 className="homeTop__mobileAbout">
                        О лаборатории Astra Dent
                    </h1>
                    <h2 className="homeTop__asideHeader">
                        Лаборатория Astra Dent использует &ensp;
                        <br />
                        высококлассное CAD/CAM обору&shy;дование лучших&ensp;
                        <br />
                        мировых брендов
                    </h2>
                    <p className="homeTop__text">
                        Наше программное обеспечение позволяет зубным
                        техникам виртуально моделировать реставрации любой
                        сложности и изготавливать их в краткие сроки с высокой
                        точностью.
                    </p>
                    <p className="homeTop__text">
                        Цифровая зуботехническая лабора&shy;тория, которая
                        производит качес&shy;твенную стоматологическую протетику
                        по индивидуальному заказу. Наше оборудование
                        составляет модель объекта в 3D-формате и изготавливает
                        его с точностью до 15 мкм.
                    </p>
                </aside>
            </section>

            <section className="homeMiddle">
                <h1 className="homeMiddle__header">
                    Наши специалисты
                </h1>

                <p className="homeTop__text homeMiddle__text">
                    Высококвалифицированные врачи-стоматологи AstraDent регулярно посещают профессиональные
                    мастер-классы и стажируются в Украине и за рубежом, чтобы быть в курсе всех современных тенденций
                    дентальной медицины. Наши специалисты осна&shy;щены современной техникой мировых лидеров
                    производства стоматоло&shy;гического оборудования и используют только высококачественные
                    сертифици&shy;рованные материалы от ведущих ком&shy;паний.
                </p>

                <div className="homeCardsWrapper">
                    {
                        doctors.map((doctor, index) => {
                            if (index >= 10 * doctorsPage - 10
                                && index < 10 * doctorsPage) {
                                const speciality = typeof (doctor.speciality) === 'string'
                                    ? doctor.speciality
                                    : doctor.speciality.join(' • ');
                                return (
                                    <Link to={`/doctor?id=${doctor.id}`} key={doctor.id} className="homeCardsWrapper__card">
                                        <img
                                            src={doctor.avatar}
                                            alt={doctor.firstName + " " + doctor.lastName}
                                            className="homeCardsWrapper__avatar"
                                        />
                                        <p className="homeCardsWrapper__name">
                                            {doctor.firstName + " " + doctor.lastName}
                                        </p>
                                        <p className="homeCardsWrapper__specialization">
                                            {speciality}
                                        </p>
                                    </Link>
                                );
                            }
                            return null;
                        })
                    }
                    <div className="otherPagesWrapper">
                        <button
                            type="button"
                            className={doctorsPage > 1
                                ? "otherPagesWrapper__active"
                                : "otherPagesWrapper__inactive"
                            }
                            onClick={prevDoctorsPage}
                        >
                            {"<"}
                        </button>
                        <p className="otherPagesWrapper__inactive">
                            {(doctorsPage * 10 - 10) + 1} ... {
                                doctorsPage * 10 <= doctors.length
                                    ? doctorsPage * 10
                                    : (doctorsPage - 1) * 10 + (doctors.length - (doctorsPage - 1) * 10)
                            }
                        </p>
                        <button
                            type="button"
                            className={doctors.length - doctorsPage * 10 > 0
                                ? "otherPagesWrapper__active"
                                : "otherPagesWrapper__inactive"
                            }
                            onClick={nextDoctorsPage}
                        >
                            {">"}
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;