import React from 'react';
import { YEAR, SOCIALFOOTER, WEBSITE_NAME } from '../../../constants/constant';
import styles from './style.module.css';

const Footer = () => {
  return (
    <footer className="footer container container-fluid f-col gap-s f-align-center f-justify-center pad-tb-m">
      <div className="footer__social f-row gap-xs">
        {SOCIALFOOTER.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <img
              src={social.icon}
              alt={social.name}
              className={styles['footer__social-img']}
            />
          </a>
        ))}
      </div>
      <div className="footer__copyright">
        <p className="text-xs text-dark">{`Copyright ${WEBSITE_NAME} © ${YEAR} All rights reserved`}</p>
      </div>
    </footer>
  );
};

export default Footer;
