import { ReactNode } from 'react';
import Header from '../Header/Header';
import { useStyles } from './Layout.styles';

const links = [
  {
    link: '/apply',
    label: 'Apply',
    links: [
      {
        link: '/apply/teachers',
        label: 'Teachers',
      },
      {
        link: '/apply/employers',
        label: 'Employers',
      },
    ],
  },
];

export interface ILayout {
  children: ReactNode | ReactNode[];
}

export default function Layout({ children }: ILayout) {
  const { classes } = useStyles();

  return (
    <>
      <Header links={links} />
      <main>{children}</main>
    </>
  );
}
