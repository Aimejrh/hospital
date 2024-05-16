import { FC, ReactNode } from 'react';

interface IRow {
  children: ReactNode;
  utils?: String;
}

const Row: FC<IRow> = ({ children, utils }) => {
  const classNames = ['row', utils ? utils : ''];

  const className = classNames.filter(Boolean).join(' ');

  return <div className={className}>{children}</div>;
};

export default Row;
