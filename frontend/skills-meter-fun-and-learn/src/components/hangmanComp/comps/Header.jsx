import React from 'react';

const Header = () => {
    const headerStyle = {
        margin: '20px 0 0',
    };

    const pStyle = {
        margin: '0',
    };

    return (
        <>
            <h1 style={headerStyle}>Hangman</h1>
            <p style={pStyle}>Find the hidden word - Enter a letter</p>
        </>
    );
};

export default Header;
