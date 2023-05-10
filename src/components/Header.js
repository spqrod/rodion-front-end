import { Link } from "react-router-dom";
import "../styles/header.scss";
import Switch from '@mui/material/Switch';

export default function Header() {
    return (
        <header className="header main">
            <div className="logoContainer">
                <Link className="logoLink headerMenuLink" to="/">
                    Rodion
                </Link>
            </div>
            <ul className="headerMenuContainer">
                <li className="headerMenuItem">
                    <Link className="headerMenuLink" to="/projects">
                        Projects
                    </Link>
                </li>
                <li className="headerMenuItem">
                    <Link className="headerMenuLink" to="/contact">
                        Contact
                    </Link>
                </li>
                <li className="headerMenuItem">
                    <Link className="headerMenuLink" to="/about">
                        About
                    </Link>
                </li>
                <li className="headerMenuItem">
                    <Switch />
                </li>
            </ul>

        </header>
    );
}