import styled from "styled-components";

// params
// color : secondary | primary

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: ${({fullWidth}) => fullWidth ? "100%" : '8rem'};
    font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
    font-size: ${({fontSize}) => fontSize ? fontSize+'px' : '1rem'};
    outline: none;
    ${({color, theme:{colors}, disabled})=> {
        const colorset = color==="secondary" ? colors.secondary : colors.primary;
        return `
            background: ${ disabled? colorset.disabled : colorset.main};
            color: ${colorset.text};
            border: ${colorset.border} solid thin;
            ${!disabled &&`
                &:hover {
                    background: ${color==="text" ? 'transparent' : colorset.accent };
                    outline: none;
                }
            `}
        `
    }}
`

export default Button;

