import tinycolor from 'tinycolor2';

const primaryColor = '#ED1A25';
const secondaryColor = '#27af5e';
const warningColor = '#FFC260';
const successColor = '#536DFE';
const infoColor = '#9013FE';

const lightenRate = 7.5;
const darkenRate = 15;

const defaultTheme = {
  palette: {
    primary: {
      main: primaryColor,
      light: tinycolor(primaryColor).lighten(lightenRate).toHexString(),
      dark: tinycolor(primaryColor).darken(darkenRate).toHexString(),
    },
    secondary: {
      main: secondaryColor,
      light: tinycolor(secondaryColor).lighten(lightenRate).toHexString(),
      dark: tinycolor(secondaryColor).darken(darkenRate).toHexString(),
      contastText: '#FFF',
    },
    warning: {
      main: warningColor,
      light: tinycolor(warningColor).lighten(lightenRate).toHexString(),
      dark: tinycolor(warningColor).darken(darkenRate).toHexString(),
    },
    success: {
      main: successColor,
      light: tinycolor(successColor).lighten(lightenRate).toHexString(),
      dark: tinycolor(successColor).darken(darkenRate).toHexString(),
    },
    info: {
      main: infoColor,
      light: tinycolor(infoColor).lighten(lightenRate).toHexString(),
      dark: tinycolor(infoColor).darken(darkenRate).toHexString(),
    },
    text: {
      primary: '#4A4A4A',
      secondary: '#6E6E6E',
      hint: '#B9B9B9',
    },
    background: {
      default: '#F6F7FF',
      light: '#F3F5FF',
    },
  },
  customShadows: {
    widget:
      '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
    widgetDark:
      '0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
    widgetWide:
      '0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: '#4A4A4A1A',
      },
    },
    MuiMenu: {
      paper: {
        boxShadow:
          '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
      },
    },
    MuiSelect: {
      icon: {
        color: '#B9B9B9',
      },
    },
    MuiListItem: {
      root: {
        '&$selected': {
          backgroundColor: '#F3F5FF !important',
          '&:focus': {
            backgroundColor: '#F3F5FF',
          },
        },
      },
      button: {
        '&:hover, &:focus': {
          backgroundColor: '#F3F5FF',
        },
      },
    },
    MuiTouchRipple: {
      child: {
        backgroundColor: 'white',
      },
    },
    MuiTableRow: {
      root: {
        height: 56,
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: '1px solid rgba(224, 224, 224, .5)',
        paddingLeft: 24,
      },
      head: {
        fontSize: '0.95rem',
      },
      body: {
        fontSize: '0.95rem',
      },
    },
    PrivateSwitchBase: {
      root: {
        marginLeft: 10,
      },
    },
  },
};


export default defaultTheme;