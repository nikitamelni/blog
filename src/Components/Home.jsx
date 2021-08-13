import React from 'react';
import meSmall from '../Resources/Media/me-small.jpg'
import '../Resources/Styles/Home.css'

function Home() {
  return (
    <>

    <img src={meSmall} alt="small picture of Nikita" className="homeImageSmall"/>
    <h2>Welcome!</h2>
    My name is Nikita, you can call me Nikita. This is my personal blog about anything from woodworking to React programming with Sitecore.
    </>
  );
}

export default Home;

