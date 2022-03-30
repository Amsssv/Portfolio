import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <div className="footer__container container">
                <div className="footer__body">
                    <div className="footer__social social">
                        <ul className="social__list">
                            <li className="social__item">
                                <a href="#" className="social__link">
                                    <img srcSet="" alt="facebook link"  
                                        className="social__image"/>
                                </a>
                            </li>
                            <li className="social__item">
                                <a href="#" className="social__link">
                                    <img srcSet="" alt="instagram link" 
                                        className="social__image"/>
                                </a>
                            </li>
                            <li className="social__item">
                                <a href="#" className="social__link">
                                    <img srcSet="" alt="twitter link" 
                                        className="social__image"/>
                                </a>
                            </li>
                            <li className="social__item">
                                <a href="#" className="social__link">
                                    <img srcSet="" alt="Linkedin link" 
                                        className="social__image"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__copyright">
                        <p className="footer__copyright__text">Copyright ©2020 All rights reserved </p>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}

export default Footer