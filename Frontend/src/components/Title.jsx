import React from 'react';

const Title = ({ children, size, style }) => {
  const mainFontSize = 28;
  const subFontSize = 24;

  const componentStyle = {
    ...style,
    fontSize: size === 'sub' ? subFontSize : mainFontSize
  };
  
  return(
    <div>
      <h2 style={componentStyle}>{children}</h2>
    </div>
  );
};

export default Title;