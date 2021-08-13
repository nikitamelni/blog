import React from 'react';
import meSmall from '../Resources/Media/me-small.jpg'

function Home() {
  return (
    <>
    <h2>Welcome!</h2>
    <img src={meSmall} alt="small picture of Nikita" className="homeImageSmall"/>
    <br />
    My name is Nikita, you can call me Nikita. This is my personal blog about anything from woodworking to React programming with Sitecore.
    </>
  );
}

export default Home;

