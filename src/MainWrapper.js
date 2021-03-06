import React from "react";
import styled from "styled-components";
import GlobalFont from "./styles/fonts";
import bg_mobile from "./assets/images/backgroundMobile.jpg";
import media from "./styles/media";
import Box from "./materials/Box";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${bg_mobile});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const MainBox = styled(Box)`
    width:min(1470px, calc(100% - 30px));
    padding: 20px 0 40px 0;
    margin: 0;
`
// 데스크탑 이상 사이즈의 화면에서 양측 여백을 관리하는 Wrapper
const MainWrapper = ({children}) => (

    <Wrapper>
        <GlobalFont />
        <MainBox>
            {children}
        </MainBox>
    </Wrapper>
);
export default MainWrapper;