import { css } from "styled-components"

const sizes = {
  giant: 1920,
  huge: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
}

// Iterate through the sizes and create a media template
// Usage:
// const StyledWrapper = styled.div`
//   ${media.huge`margin-left: 20px;`}
// `
const media = Object.keys(sizes).reduce(
  (accumulator, label) => {
    const emSize = sizes[label] / 16
    accumulator[label] = (first) => css`
      @media (max-width: ${emSize}em) {
        ${css(first)}
      }
    `
    return accumulator
  },{})

export default media;