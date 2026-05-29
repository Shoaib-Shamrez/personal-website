'use client';

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EmailLink = () => {
  return (
    <div className="inline-container">
      <FontAwesomeIcon icon={faEnvelope} size="1x" className="contact-icon" />
      <a href="mailto:shoaibshamrez@gmail.com">
        <span>shoaibshamrez@gmail.com</span>
      </a>
    </div>
  );
};

export default EmailLink;
