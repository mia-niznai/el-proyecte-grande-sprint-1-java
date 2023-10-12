import React from 'react';

const Notification = ({ showNotification }) => {
    return (
        <div className={`notification-container ${showNotification ? 'show' : ''}`} style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '10px 10px 0 0',
            padding: '15px 20px',
            position: 'absolute',
            bottom: '-50px',
            transition: 'transform 0.3s ease-in-out',
            margin: '0',
            overflow: 'hidden',
            color: '#fff',
        }}>
            <p style={{ margin: '0' }}>You have already entered this letter</p>
        </div>
    );
}

export default Notification;
