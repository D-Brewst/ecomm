import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            {year} © Devon Brewster
        </div>
    )
}

export default Footer;