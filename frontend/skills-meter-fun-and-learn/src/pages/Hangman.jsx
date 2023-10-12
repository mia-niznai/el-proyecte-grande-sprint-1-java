import React, { useState, useEffect } from 'react';
import Header from '../components/hangmanComp/comps/Header';
import Figure from '../components/hangmanComp/comps/Figure';
import WrongLetters from '../components/hangmanComp/comps/WrongLetters';
import Word from '../components/hangmanComp/comps/Word';
import Popup from '../components/hangmanComp/comps/Popup';
import Notification from '../components/hangmanComp/comps/Notification';
import { showNotification as show } from '../components/hangmanComp/helpers/helpers';

const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const Hangman = () => {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event;
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();
                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(currentLetters => [...currentLetters, letter]);
                    } else {
                        show(setShowNotification);
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(currentLetters => [...currentLetters, letter]);
                    } else {
                        show(setShowNotification);
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, wrongLetters, playable]);

    function playAgain() {
        setPlayable(true);

        // Empty Arrays
        setCorrectLetters([]);
        setWrongLetters([]);

        const random = Math.floor(Math.random() * words.length);
        selectedWord = words[random];
    }

    return (
        <div style={{
            boxSizing: 'border-box',
            backgroundColor: '#34495e',
            color: '#fff',
            fontFamily: 'Arial, Helvetica, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '80vh',
            margin: 0,
            overflow: 'hidden'
        }}>
            <Header />
            <div style={{
                padding: '20px 30px',
                position: 'relative',
                margin: 'auto',
                height: '350px',
                width: '450px'
            }}>
                <Figure wrongLetters={wrongLetters} />
                <WrongLetters wrongLetters={wrongLetters} />
                <Word selectedWord={selectedWord} correctLetters={correctLetters} />
            </div>
            <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
            <Notification showNotification={showNotification} />
        </div>
    );
}

export default Hangman;
