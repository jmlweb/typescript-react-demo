const BASE_COLORS = {
  black: '#000',
  white: '#fff',
  // PRIMARY
  primary: '#0A48EC',
  primaryDark: '#052476',
  primaryLight: '#CEDAFB',
  // SECONDARY
  secondary: '#CC0034',
  secondaryDark: '#990027',
  secondaryDark30: '#6B001B',
  secondaryLight: '#FF99B3',
  // TERTIARY
  tertiary: '#F79301',
  tertiaryDark: '#7C4A01',
  tertiaryLight: '#FDDFB3',
  // NEUTRAL
  neutral: {
    100: '#070E2C',
    80: '#393E56',
    60: '#6A6E80',
    10: '#F4F4F6',
  },
} as const;

const SEMANTIC_COLORS = {
  text: BASE_COLORS.neutral['80'],
  background: BASE_COLORS.white,
  accent: BASE_COLORS.tertiary,
  highlight: BASE_COLORS.tertiaryLight,
  muted: BASE_COLORS.neutral['10'],
} as const;

const colors = {
  ...BASE_COLORS,
  ...SEMANTIC_COLORS,
} as const;

export default colors;
