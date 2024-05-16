import { FC, ReactNode } from 'react';
import './Layout.scss';
import Wrapper from './base/Wrapper/Wrapper';
import Header from './base/Header/Header';
import Main from './base/Main/Main';
import Footer from './base/Footer/Footer';
import Sidebar from './base/Sidebar/Sidebar';

interface ILayout {
  children?: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </div>    
  );
};

export default Layout;
