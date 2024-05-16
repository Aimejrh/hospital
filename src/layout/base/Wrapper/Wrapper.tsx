import { FC, ReactNode } from 'react';
import './Wrapper.scss';

interface IWrapper {
  children: ReactNode;
}

const Wrapper: FC<IWrapper> = ({ children }) => {
  return <div className="wrapper sidebar-compact">{children}</div>;
};

export default Wrapper;
