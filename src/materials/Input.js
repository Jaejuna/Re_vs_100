import styled from "styled-components";

const Input = styled.input`
    font-size: 18px;
    padding: 10px;
    border: none;
    border-radius: 6px;
    outline: none;
    border-bottom: 2px solid ${({theme}) => theme.colors.main};
    background: rgba( 255, 255, 255, 0.20 );
    box-shadow: 0 8px 40px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10.5px );
    -webkit-backdrop-filter: blur( 10.5px );
    ::placeholder {
        color: #dddddd;
    }
    :focus {
        border-bottom: 4px solid ${({theme}) => theme.colors.selected};
    }

`;

export default Input;