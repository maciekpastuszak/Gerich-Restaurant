import React from 'react';

import './Newsletter.css';
import SubHedaing from '../Subheading/Subheading';

const Newsletter = () => (
  <div className="app__newsleter">
    <div className="app__newsleter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest updates!</p>
    </div>
  </div>
);

export default Newsletter;
