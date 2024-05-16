import { FC } from 'react';
import './NavItem.scss';
import { NavLink } from 'react-router-dom';

const NavItem: FC = () => {
  return (
    <li className="nav_item">
      <NavLink className={({ isActive }): string => (isActive ? 'active' : '')} to="/"></NavLink>
    </li>
  );
};

export default NavItem;
