import React from 'react';
import './Style/Header.css';

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src="logo.jpg" alt="logo" className="header-image" />
                <div className="sub-text-left">515-727-5420</div>
            </div>

            <div className="header-text">Providing quality professional services</div>

        </div>
    );
};

export default Header;
