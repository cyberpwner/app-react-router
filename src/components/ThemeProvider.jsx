import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';

function getPreferredTheme() {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }

  return 'light';
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getPreferredTheme());

  const memoizedThemeData = useMemo(
    () => ({ theme, setTheme }),
    [theme, setTheme]
  );

  useEffect(() => {
    const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (event) => {
      document.querySelector('html').classList.toggle('dark');
      setTheme(event.matches ? 'dark' : 'light');
    };

    themeMediaQuery.addEventListener('change', handleThemeChange);

    return () =>
      themeMediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  return (
    <ThemeContext.Provider value={memoizedThemeData}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
