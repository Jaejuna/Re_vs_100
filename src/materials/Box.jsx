import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    justify-content: ${({left}) => left ? 'left' : 'center'};
    align-items: center;
`
export default Box;