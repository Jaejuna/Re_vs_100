// 여기는 전체 테마에 대한 내용!

const colors = {
    main: '#333',
    text: '#fff',
    answer: '#d1d1d1',
    wrong: '#e22222'
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