import PropTypes from 'prop-types';
// @project
import RTLLayout from '@/components/RTLLayout';
import ThemeProvider from '@/components/ThemeProvider';
import { ConfigProvider } from '@/contexts/ConfigContext';

/***************************  COMMON - CONFIG, THEME  ***************************/

export default function ProviderWrapper({ children }) {
  return (
    <ConfigProvider>
      <ThemeProvider>
        <RTLLayout>
          <main>{children}</main>
        </RTLLayout>
      </ThemeProvider>
    </ConfigProvider>
  );
}

ProviderWrapper.propTypes = { children: PropTypes.any };
