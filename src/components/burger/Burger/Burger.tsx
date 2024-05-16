import './Burger.scss';
import { toggleSidebar } from '@/store/slices/appSlice';
import { FC } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useDispatch } from 'react-redux';

const Burger: FC = () => {
  const dispatch = useDispatch();

  const sidebarToggle = (): void => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="burger" onClick={sidebarToggle}>
      <RxHamburgerMenu className="burger-icon" />
    </div>
  );
};

export default Burger;
