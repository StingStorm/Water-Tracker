import clsx from 'clsx';
import css from './Section.module.css';
import { matchPath, useLocation } from 'react-router-dom';

const Section = ({ children }) => {
  const { pathname } = useLocation();

  const isWelcome = matchPath('/welcome/*', pathname);
  const isHome = matchPath('/home/*', pathname);
  const isAuthPath =
    matchPath('/signin/*', pathname) || matchPath('/signup/*', pathname);
  return (
    <div
      className={clsx(
        isWelcome && css.sectionWelcome,
        isHome && css.sectionHome,
        isAuthPath && css.sectionAuth
      )}
    >
      {children}
    </div>
  );
};

export default Section;
