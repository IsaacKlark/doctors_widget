import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import headerLogo from '../../images/header_logo.png';
import phone from '../../images/phone.png';
import instagram from '../../images/instagram.png';
import menu from '../../images/menu.png';

const Header = () => {
    const [language, setLanguage] = useState('Рус');
    const [displaySelectOptions, setDisplaySelectOptions] = useState(false);

    return (
        <header>
            <button type="button" className="headerMobileMenu">
                <img src={menu} alt="menu" />
            </button>
            <div className="headerPart">
                <img src={headerLogo} alt="Astro dent laboratory" className="logo" />
                <nav className="links">
                    <Link to="/about" className='links__link'>
                        О нас
                    </Link>
                    <Link to="/services" className='links__link'>
                        Услуги
                    </Link>
                    <Link to="/price" className='links__link'>
                        Прайс
                    </Link>
                    <Link to="/news" className='links__link'>
                        Новости
                    </Link>
                    <Link to="/contacts" className='links__link'>
                        Контакты
                    </Link>
                </nav>
            </div>
            <div className="headerPart">
                <button type="button" className="serviceButton">
                    Заказать услугу
                </button>

                <button type="button" className="callButton">
                    Заказать звонок
                </button>

                <a href="tel:+1234567890" className="phone">
                    <img src={phone} className="phone__image" alt="(044) 222 33 33"/>
                    <p className="phone__index">
                        (044)
                    </p>
                    <p className="phone__number">
                        222 33 33
                    </p>
                </a>

                <a href="https://www.instagram.com/?hl=ru" className="instagramLink">
                    <img src={instagram} className="instagram" alt="instargram"/>
                </a>

                <div
                    className="select"
                    role="button"
                    onClick={() => { setDisplaySelectOptions(!displaySelectOptions) }}
                >
                    {language}
                    {displaySelectOptions
                        ? <div className="select__optionsWrapper">
                            <button
                                type="button"
                                onClick={() => { setLanguage("Рус"); setDisplaySelectOptions(false) }}
                                className="select__option"
                            >
                                Рус
                        </button>

                            <button
                                type="button"
                                onClick={() => { setLanguage("En"); setDisplaySelectOptions(false) }}
                                className="select__option"
                            >
                                En
                        </button>
                        </div>
                        : null
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;