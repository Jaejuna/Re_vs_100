// 여기는 전체 테마에 대한 내용!

const colors = {
    main: '#e8eaf6',
    text: '#333',
    border: '#494949',
    selected: `#d9afff`,
    answer: '#b8cbff',
    answerBorder: '#eac2efc',
    answerText: '#fce4ec',
    primary: {
      main: '#01579b',
      text: `#fff`,
      border: `rgba(0, 0, 0, 0.5)`,
      accent: '#666ad1',
      disabled: `#6f74dd`
    },
    secondary:{
      main: `#464646`,
      text: `rgba(255,255,255,0.85)`,
      border: `rgba(255,255,255,0.15)`,
      accent: `#5f5f5f`,
      disabled: '#4A4A4A',
    },
};

//여기 밑에는 걍 복붙한거ㅎㅎㅎ

const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(50),
};

const deviceSizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 450,
  tablet: 768,
  tabletL: 1024,
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS}px)`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM}px)`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL}px)`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet}px)`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL}px)`,
};

const theme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
};

export default theme;