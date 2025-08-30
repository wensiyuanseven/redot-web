'use client';
import PropTypes from 'prop-types';

// @mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// @project
import ElevationScroll from './ElevationScroll';
import ContainerWrapper from '@/components/ContainerWrapper';

export const navbar4Height = { xs: 64, sm: 76, md: 92 };

// override media queries injected by theme.mixins.toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: navbar4Height.md,
    paddingLeft: 0,
    paddingRight: 0
  },
  width: '100%',
  justifyContent: 'center',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    '@media all': { minHeight: navbar4Height.sm },
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': { minHeight: navbar4Height.xs },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  }
}));

/***************************  NAVBAR - 4  ***************************/

/**
 *
 * Demos:
 * - [Navbar4](https://www.saasable.io/blocks/navbar/navbar4)
 *
 * API:
 * - [Navbar4 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/navbar/navbar4#props-details)
 */

export default function Navbar4({ children, isFixed = true, ...props }) {
  return (
    <>
      <ElevationScroll isFixed={isFixed} {...props}>
        <AppBar {...(!isFixed && { position: 'static', elevation: 0 })} component="nav" color="inherit" sx={{ background: 'transparent' }}>
          <StyledToolbar>
            <ContainerWrapper sx={{ px: { sm: 2 } }}>{children}</ContainerWrapper>
          </StyledToolbar>
        </AppBar>
      </ElevationScroll>
      {isFixed && <StyledToolbar />}
    </>
  );
}

Navbar4.propTypes = { children: PropTypes.any, isFixed: PropTypes.bool, props: PropTypes.any };
