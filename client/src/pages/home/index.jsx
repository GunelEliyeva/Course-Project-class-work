import React from 'react'
import Helmet from "helmet";
import SectionOne from '../section-1';
import SectionTwo from '../section-2';
import SectionThree from '../section-3';

const Home = () => {
  return (
    <div>
          <Helmet>
          <title>Home Page</title>
          <meta name="description" content="My home page" />
        </Helmet>

<SectionOne/>
<SectionTwo/>
<SectionThree/>
    </div>
  )
}

export default Home