import React from 'react';

function About({ image, aboutText }) {
  return (
    <aside>
      <img
        src={image ? image : 'https://via.placeholder.com/215'}
        alt='blog logo'
      />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About