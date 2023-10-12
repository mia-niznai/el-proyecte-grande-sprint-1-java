import React from 'react';

const WrongLetters = ({ wrongLetters }) => {
    return (
        <div className="wrong-letters-container" style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', flexDirection: 'column', textAlign: 'right' }}>
            <div>
                {wrongLetters.length > 0 &&
                    <p style={{ margin: '0 0 5px' }}>Wrong</p>
                }
                {wrongLetters
                    .map((letter, i) => <span key={i} style={{ fontSize: '24px' }}>{letter}</span>)
                    .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
            </div>
        </div>
    );
}

export default WrongLetters;
