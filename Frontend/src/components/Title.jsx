import React from 'react';

const Title = ({ children, size }) => {
  const mainFontSize = 28;
  const subFontSize = 24;



  return(
    <div>
      <h2 style={{fontSize: size === 'sub' ? subFontSize : mainFontSize }}>{children}</h2>
    </div>
  );
};

export default Title;