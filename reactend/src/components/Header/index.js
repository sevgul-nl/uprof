import React from 'react';
import './styles.css';

const Header = () => {
  const title = 'User Profile';
  const subtitle = 'Identity Building';
  return (
    <div className="headerSection">
      <div className="headerTitle">{title}</div>
      <div className="headerSubtitle">{subtitle}</div>
    </div>
  );
};

export default Header;
