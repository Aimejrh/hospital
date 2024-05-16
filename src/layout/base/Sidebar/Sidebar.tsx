import './Sidebar.scss';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useMedia } from 'use-media';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';
import { RootState } from '@/store';
import { FiGrid } from 'react-icons/fi';
import { toggleSidebar } from '@/store/slices/appSlice';
import SimpleBarReact from 'simplebar-react';
// import SimpleBar from 'simplebar';

import 'simplebar/dist/simplebar.css';

const Sidebar: FC = () => {
  const [isCompact, setIsCompact] = useState(false);
  const { sidebarOpen } = useSelector((state: RootState) => state.app);
  const isClose = useMedia({ minWidth: 990 });
  const dispatch = useDispatch();

  const compact = (): void => {
    setIsCompact(!isCompact);
  };

  const close = (): void => {
    dispatch(toggleSidebar());
  };

  return (
    <aside
      className={`sidebar ${isCompact && isClose ? 'compact' : ''} ${sidebarOpen ? 'open' : ''}`}
    >
      <SimpleBarReact aria-label="scrollable content" className='SimpleBar'>
        <ul className="sidebar_menu">
          <li className="menu_side">
            <a href="#" style={{ pointerEvents: 'none' }}>
              <h1 className="menu_text">CSMIS</h1>
              <span className='logo'>M</span>
            </a>
          </li>
          <li className="menu_side">
            <a href="#">
              <span className="menu_icons">
                <FiGrid />
              </span>
              <span className="menu_text">Dashboard</span>
            </a>
          </li>
          <li className="menu_side">
            <a href="#">
              <span className="menu_icons">
                <FiGrid />
              </span>
              <span className="menu_text">Dashboard</span>
            </a>
          </li>
          <li className="menu_side">
            <a href="#">
              <span className="menu_icons">
                <FiGrid />
              </span>
              <span className="menu_text">Dashboard</span>
            </a>
          </li>
          <li className="menu_side">
            <a href="#">
              <span className="menu_icons">
                <FiGrid />
              </span>
              <span className="menu_text">Dashboard</span>
            </a>
          </li>
          <li className="menu_side">
            <a href="#">
              <span className="menu_icons">
                <FiGrid />
              </span>
              <span className="menu_text">Dashboard</span>
            </a>
          </li>
        </ul>
        <div onClick={compact}>
          <MdKeyboardDoubleArrowRight />
        </div>
        <div onClick={close}>
          <RxCross1 />
        </div>
      </SimpleBarReact>
    </aside>
  );
};

export default Sidebar;
