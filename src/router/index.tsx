import { FC, ReactNode } from 'react';
import { useRoutes } from 'react-router-dom';

import Home from '@pages/Home';
import About from '@pages/About';
import FormRegistr from '@/pages/Form';
import Users from '@/pages/Users';

const RouterView: FC = (): ReactNode => {
  const element: ReactNode = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/form', element: <FormRegistr/> },
    { path: '/users', element: <Users/> },
  ]);

  return element;
};

export default RouterView;
