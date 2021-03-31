import { createGlobalStyle } from "styled-components";
import LabDigital from "../assets/fonts/labdigital.ttf";
import SamOut from "../assets/fonts/SamlipOutline.ttf"
import SamBasic from "../assets/fonts/SamlipBasic.ttf"

export default createGlobalStyle`
    @font-face {
        font-family: "SamOut";
        src: local('SamOut'), local('SamBasic')
        url(${SamOut}) format('woff'),
        url(${SamBasic}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;