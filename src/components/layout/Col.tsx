import { FC, ReactNode } from 'react';

interface ICol {
  children: ReactNode;
  col?: String;
  sm?: String;
  md?: String;
  lg?: String;
  xl?: String;
  xxl?: String;
  utils?: String;
}

const Col: FC<ICol> = ({ children, col, sm, md, lg, xl, xxl, utils }) => {
  const hasCount = (): string => {
    return !col && !sm && !md && !lg && !xl && !xxl ? 'col' : '';
  };

  const classNames = [
    hasCount(),
    col ? `col-${col}` : '',
    sm ? `col-sm-${sm}` : '',
    md ? `col-md-${md}` : '',
    lg ? `col-lg-${lg}` : '',
    xl ? `col-xl-${xl}` : '',
    xxl ? `col-xxl-${xxl}` : '',
    utils ? utils : '',
  ];

  const className = classNames.filter(Boolean).join(' ');

  return <div className={className}>{children}</div>;
};

export default Col;
