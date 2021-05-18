import React from 'react';

import Nav from './Nav';
import Info from './Info';
import { Props } from './Toggle';
import { LeftWrapper } from '../../Components/SideWrapper';

const Header: React.FC<Props> = ({ toggle }) => {
  return (
    <LeftWrapper>
      <Nav />
      <Info toggle={toggle} />
    </LeftWrapper>
  );
};

export default Header;
