import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';
import Button from 'react-bootstrap/Button';

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulations! You won! 😃';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
      <div
          className="popup-container"
          style={
            finalMessage !== ''
                ? {
                  display: 'flex',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  position: 'fixed',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                }
                : { display: 'none' }
          }
      >
        <div
            className="popup"
            style={{
              background: '#2980b9',
              borderRadius: '5px',
              boxShadow: '0 15px 10px 3px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              textAlign: 'center',
            }}
        >
          <h2>{finalMessage}</h2>
          <h3>{finalMessageRevealWord}</h3>
          <Button
              onClick={playAgain}
              variant="light"
              style={{
                marginTop: '20px',
                fontSize: '16px',
              }}
          >
            Play Again
          </Button>
        </div>
      </div>
  );
};

export default Popup;
