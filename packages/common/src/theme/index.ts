import colors from './colors';
import fonts from './fonts';
import fontSizes from './fontSizes';
import fontWeights from './fontWeights';

const theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
} as const;

export type Theme = typeof theme;

export default theme;
