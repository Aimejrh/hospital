import { FC } from 'react';
import './Header.scss';
import Burger from '@components/burger/Burger/Burger';

const Header: FC = () => {
  return (
    <header className="header">
      <span>Header</span>
      <Burger />
    </header>
  );
};

export default Header;
