// @project
import { FONT_SPACE_GROTESK, FONT_DMSANS } from '@/config';

/***************************  HOSTING THEME - TYPOGRAPHY  ***************************/

export default function typography(theme) {
  return {
    fontFamily: FONT_SPACE_GROTESK,

    // heading - large
    h1: {
      fontWeight: 500,
      fontSize: 57,

      // lineHeight = lineHeight in figma / fontSize. i.e 1.123 = 64/57
      lineHeight: 1.123,
      letterSpacing: 0,
      [theme.breakpoints.down('md')]: {
        fontSize: 45,
        lineHeight: 1.156
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 32,
        lineHeight: 1.222
      }
    },

    // heading - medium
    h2: {
      fontWeight: 500,
      fontSize: 45,
      lineHeight: 1.156,
      letterSpacing: 0,
      [theme.breakpoints.down('md')]: {
        fontSize: 36,
        lineHeight: 1.222
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 24,
        lineHeight: 1.333
      }
    },

    // display - medium
    h3: {
      fontWeight: 400,
      fontSize: 28,
      lineHeight: 1.286,
      letterSpacing: 0,
      [theme.breakpoints.down('md')]: {
        fontSize: 24,
        lineHeight: 1.333
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 20,
        lineHeight: 1.4
      }
    },

    // display - small
    h4: {
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 1.333,
      letterSpacing: 0,
      [theme.breakpoints.down('md')]: {
        fontSize: 20,
        lineHeight: 1.4
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
        lineHeight: 1.5
      }
    },

    // label - large
    h5: {
      fontFamily: FONT_DMSANS,
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 1.273,
      letterSpacing: 0,
      [theme.breakpoints.down('md')]: {
        fontSize: 16,
        lineHeight: 1.5,
        letterSpacing: 0.15
      }
    },

    // paragraph - large
    h6: {
      fontFamily: FONT_DMSANS,
      fontWeight: 400,
      fontSize: 22,
      lineHeight: 1.364,
      letterSpacing: 0,
      [theme.breakpoints.down('md')]: {
        fontSize: 16,
        lineHeight: 1.5,
        letterSpacing: 0.5
      }
    },

    // paragraph - medium
    body1: {
      fontFamily: FONT_DMSANS,
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0.5,
      [theme.breakpoints.down('md')]: {
        fontSize: 14,
        lineHeight: 1.429,
        letterSpacing: 0.25
      }
    },

    // paragraph - small
    body2: {
      fontFamily: FONT_DMSANS,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.429,
      letterSpacing: 0.25,
      [theme.breakpoints.down('md')]: {
        fontSize: 12,
        lineHeight: 1.5
      }
    },

    // label - medium
    subtitle1: {
      fontFamily: FONT_DMSANS,
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0.15,
      [theme.breakpoints.down('md')]: {
        fontSize: 14,
        lineHeight: 1.429,
        letterSpacing: 0.1
      }
    },

    // label - small
    subtitle2: {
      fontFamily: FONT_DMSANS,
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 1.429,
      letterSpacing: 0.1,
      [theme.breakpoints.down('md')]: {
        fontSize: 12,
        lineHeight: 1.5
      }
    },

    // hyperlink - small
    caption: {
      fontFamily: FONT_DMSANS,
      fontWeight: 700,
      fontSize: 12,
      lineHeight: 1.333,
      letterSpacing: 0
    },

    // hyperlink - large
    caption1: {
      fontFamily: FONT_DMSANS,
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0.5
    },

    // hyperlink - medium
    caption2: {
      fontFamily: FONT_DMSANS,
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.429,
      letterSpacing: 0.1
    },

    // button
    button: {
      fontFamily: FONT_DMSANS,
      textTransform: 'capitalize'
    }
  };
}
