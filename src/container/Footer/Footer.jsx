import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';

import { FooterOverlay, Newsletter} from '../../components';
import { images } from '../../constants'
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-inks">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="app__footer-links_logo">
        
      </div>
      <div className="app__footer-links_work">

      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
