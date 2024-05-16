import { FC } from 'react';
import RouterView from '@/router';
import Layout from '@/layout';
import DatePicker from './layout/base/DatePicker/DatePicker';

const App: FC = () => {
  return (
    <>
      <Layout>
        <DatePicker/>
        <RouterView />
      </Layout>
    </>
  );
};

export default App;
