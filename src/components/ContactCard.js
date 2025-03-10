import React from 'react';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

const ContactCard = () => {
  return (
    <div className="contact-card">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ 
            color: '#333',
            margin: '0',
            fontSize: '24px'
          }}>
            <FaUser style={{ marginRight: '10px' }}/>
            Andres Figueroa Bustos
          </h2>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          color: '#666'
        }}>
          <FaEnvelope />
          <a href="mailto:bulberhampton@gmail.com" 
             style={{ 
               color: '#666', 
               textDecoration: 'none',
               ':hover': { color: '#000' }
             }}>
            bulberhampton@gmail.com
          </a>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          color: '#666'
        }}>
          <FaPhone />
          <a href="tel:+56997333125" 
             style={{ 
               color: '#666', 
               textDecoration: 'none',
               ':hover': { color: '#000' }
             }}>
            + 56 9973 3125
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;