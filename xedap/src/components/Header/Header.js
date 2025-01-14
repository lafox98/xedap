import React from 'react';
import '.././styles/header.css';

function Header() {
    return (
        <header>
            {/* Topbar */}
            <div id="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="pull-right">
                                <div className="login">
                                    <i className="zmdi zmdi-account"></i>
                                    <a href="#">Login</a>
                                </div>
                                <div className="lang toggler">
                                    <a href="#">
                                        <img src="http://placehold.it/14x11" alt="flag" />
                                        <i className="zmdi zmdi-chevron-down"></i>
                                    </a>
                                    <ul className="toggled">
                                        <li><a href="#">English</a></li>
                                        <li><a href="#">Tiếng Việt</a></li>
                                    </ul>
                                </div>
                                <div className="currency toggler">
                                    <a href="#">
                                        <span>$</span>
                                        <i className="zmdi zmdi-chevron-down"></i>
                                    </a>
                                    <ul className="toggled">
                                        <li><a href="#">USD</a></li>
                                        <li><a href="#">VND</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="top-contact">
                                <span><i className="zmdi zmdi-phone"></i></span>
                                <p className="tel">0123 456 789</p>
                                <p className="mail">email@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menubar */}
            <div id="menubar">
                <div className="container">
                    <div className="menubar-tools pull-right">
                        <div className="sandwich">
                            <a href="#"><i className="zmdi zmdi-menu"></i></a>
                        </div>
                        <div className="search">
                            <a href="#"><i className="zmdi zmdi-search"></i></a>
                        </div>
                        <div className="cart">
                            <a href="#"><i className="zmdi zmdi-shopping-cart"></i></a>
                        </div>
                    </div>
                    <div className="logo pull-left">
                        <a href="#">
                            <img src="/assets/images/logo/logo_demo.jpg" alt="Logo" />
                        </a>
                        <p>Premium Bike Store</p>
                    </div>
                    <nav className="navigation">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
