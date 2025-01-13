import React from 'react';

function Header() {
    return (
        <>
            <header>
                <div id="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="pull-right">
                                    <div className="login">
                                        <i className="zmdi zmdi-account"></i>
                                        <a href="#">Login</a>
                                    </div>
                                    <div className="lang pos-r toggle-menu">
                                        <i className="zmdi zmdi-globe"></i>
                                        <ul>
                                            <li><a href="#">English</a></li>
                                            <li><a href="#">Tiếng Việt</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Add more content here */}
        </>
    );
}

export default Header;
