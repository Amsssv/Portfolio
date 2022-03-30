import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            <header className="header">
            <div className="header__container container">
                <div className="header__body">
                    <div className="header__burger burger">
                        <span></span>
                    </div>
                    <nav className="header__menu menu ">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="#" className="menu__link">Works</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">Blog</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        )
    }
}

export default Header