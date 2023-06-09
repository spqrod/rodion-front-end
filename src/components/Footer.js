import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import "../styles/footer.scss";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer main">
            <div className="footerContactsContainer">
                <div className="footerButtonContainer">
                    <button className="button">
                        <Link className="buttonLink" to="/book-consultation">
                            Записаться
                        </Link>
                        <div className="buttonBorder"></div>
                        <div className="buttonBorder"></div>
                        <div className="buttonBorder"></div>
                        <div className="buttonBorder"></div>
                    </button>
                </div>
            </div>
            <ul className="footerMenuContainer">
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/">
                        Домой
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/blog">
                        Психологические заметки
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/methods">
                        Методы
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/contact">
                        Связаться
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/about">
                        Обо мне
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/privacy-policy">
                        Политика конфиденциальности
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/terms-of-service">
                        Условия использования
                    </Link>
                </li>
            </ul>
            <p className="footerAllRightsReservedLine">
                Психолог Дарья Жеребцова © { year }. Все права защищены
            </p>
        </footer>
    );
}