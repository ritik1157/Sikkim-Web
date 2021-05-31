import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Flag } from "../Asset/indian-flag.svg";

const Header = () => {
    const location = useLocation();

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link
                            to="/"
                            className={
                                location.pathname === "/" ? "active" : ""
                            }
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/explore"
                            className={
                                location.pathname === "/explore" ? "active" : ""
                            }
                        >
                            Explore
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/gallery"
                            className={
                                location.pathname === "/gallery" ? "active" : ""
                            }
                        >
                            Gallery
                        </Link>
                    </li>
                </ul>
            </nav>

            <Flag />
        </header>
    );
};

export default Header;
