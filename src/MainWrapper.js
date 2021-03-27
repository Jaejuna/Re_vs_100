import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.main};
    margin: 0;
`
const MainWrapper = styled.div`
    width:min(1470px, calc(100% - 30px));
    padding: 20px 0 40px 0;
    margin: 0;
`

// 데스크탑 이상 사이즈의 화면에서 양측 여백을 관리하는 Wrapper
export default ({children}) => (
    <Wrapper>
        <MainWrapper>
            {children}
        </MainWrapper>
    </Wrapper>
);