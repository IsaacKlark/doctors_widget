import React from 'react';
import "./Footer.scss";
import footerLogo from '../../images/footer_logo.png';
import { Link } from 'react-router-dom';
import phone from '../../images/phone.png';

const Footer = () => {
    return (
        <footer>
            <section className="footerTop">
                <img src={footerLogo} alt="Astro Dent Laboratory" className="footerLogo" />
                <div className="footerListsWrapper">
                    <ul className="fotterLinksList">
                        <li>
                            <Link to="/about" className="fotterLinksList__link">
                                О нас
                        </Link>
                        </li>
                        <li>
                            <Link to="/services" className="fotterLinksList__link">
                                Услуги
                        </Link>
                        </li>
                        <li>
                            <Link to="/price" className="fotterLinksList__link">
                                Прайс
                        </Link>
                        </li>
                    </ul>

                    <ul className="fotterLinksList">
                        <li>
                            <Link to="/news" className="fotterLinksList__link">
                                Новости
                        </Link>
                        </li>
                        <li>
                            <Link to="/contacts" className="fotterLinksList__link">
                                Контакты
                        </Link>
                        </li>
                    </ul>
                </div>

                <div className="phoneWrapperFooter">
                    <a href="tel:+1234567890" className="phoneFooter">
                        <img src={phone} className="phoneFooter__image" alt="(044) 222 33 33" />
                        <p className="phoneFooter__index">
                            (044)
                        </p>
                        <p className="phoneFooter__number">
                            222 33 33
                        </p>
                    </a>
                    <div className="footerButtonsWrapper">
                        <button type="button" className="callButtonFooter">
                            Заказать звонок
                        </button>
                        <button type="button" className="serviceButtonFooter">
                            Заказать услугу
                        </button>
                    </div>
                </div>
            </section>

            <section className="footerBottom">
                <p className="footerBottom__text">
                    © 2018 all rights reserved AstraDent
                </p>
                <div className="footerBottom__linksWrapper">
                    <Link to="/license" className="footerBottom__text">
                        Лицензии
                    </Link>
                    <Link to="/guarantee" className="footerBottom__text">
                        Гарантии
                    </Link>
                    <Link to="/privacypolicy" className="footerBottom__text">
                        Политика конфиденциальности
                    </Link>
                </div>
            </section>
        </footer>
    )
}

export default Footer;