import React from "react";
import styled from "styled-components";
import GlobalFont from "./styles/fonts";

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: ${({theme}) => theme.colors.main}; */
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    margin: 0;

`
const MainBox = styled.div`
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