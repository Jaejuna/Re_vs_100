import { createGlobalStyle } from "styled-components";
import LabDigital from "./assets/fonts/labdigital.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: "Lab Digital";
        src: local("Lab Digital"),
        url(${LabDigital}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;