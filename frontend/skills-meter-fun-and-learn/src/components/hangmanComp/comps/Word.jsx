import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {
    return (
        <div className="word" style={{ display: 'flex', position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
            {selectedWord.split('').map((letter, i) => {
                return (
                    <span className="letter" key={i} style={{ borderBottom: '3px solid #2980b9', display: 'inline-flex', fontSize: '30px', alignItems: 'center', justifyContent: 'center', margin: '0 3px', height: '50px', width: '20px' }}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
                );
            })}
        </div>
    );
}

export default Word;
