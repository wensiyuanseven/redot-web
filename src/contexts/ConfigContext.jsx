'use client';
import PropTypes from 'prop-types';

import { createContext } from 'react';

// @project
import defaultConfig from '@/config';
import useLocalStorage from '@/hooks/useLocalStorage';

// @initial
const initialState = {
  ...defaultConfig,
  onChangeCurrentTheme: () => {},
  onChangeThemeDirection: () => {},
  onChangeThemeMode: () => {}
};

/***************************  CONFIG CONTEXT & PROVIDER  ***************************/

const ConfigContext = createContext(initialState);

function ConfigProvider({ children }) {
  const [config, setConfig] = useLocalStorage('sass-able-react-mui-next-ts', initialState);

  const onChangeCurrentTheme = (currentTheme) => {
    setConfig({
      ...config,
      currentTheme
    });
  };

  const onChangeThemeDirection = (direction) => {
    setConfig({
      ...config,
      themeDirection: direction
    });
  };

  const onChangeThemeMode = (mode) => {
    setConfig({
      ...config,
      mode
    });
  };

  return <ConfigContext value={{ ...config, onChangeCurrentTheme, onChangeThemeDirection, onChangeThemeMode }}>{children}</ConfigContext>;
}

export { ConfigProvider, ConfigContext };

ConfigProvider.propTypes = { children: PropTypes.any };
