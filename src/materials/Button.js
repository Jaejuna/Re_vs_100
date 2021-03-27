import styled from "styled-components";

// params

const Button = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.colors.main};
    font-size: 14px;
    font-family: "montserrat";
    text-decoration: none;
    margin: 30px 0;
    border: 2px solid #ff7675;
    padding: 14px 60px;
    text-transform: uppercase;
    overflow: hidden;
    transition: 1s all ease;

    &::before{
        background: #ff7675;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: -1;
        transition: all 0.6s ease;
    }


    &::before{
        width: 0%;
        height: 100%;
    }

    &:hover::before{
        width: 100%;
    }
`

export default Button;

