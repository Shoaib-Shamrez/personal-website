'use client';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WhatsappLink = () => {
  return (
    <div className="inline-container">
      <FontAwesomeIcon icon={faWhatsapp} size="1x" className="contact-icon" />
      <a href="https://wa.me/923115926316" target="_blank" rel="noopener noreferrer">
        <span>+92 311 5926316</span>
      </a>
    </div>
  );
};

export default WhatsappLink;
