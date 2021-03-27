import React, { useRef, useState } from 'react'
import styled from 'styled-components'

const Modal = styled.div`
	z-index: 10;
	display: ${({show}) => (show ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width:100vw;
	background: rgba(0,0,0,0.5);
`;

const Container = styled.div`
    background-color: #eee;
    box-shadow: 0px 2px 6px grey;
    border-radius: 10px;
    padding: 10px;
    width: 300px;
    height: 400px;
`

const Chance = ({visible, toggle}) => {
    return (
        <Modal show={visible} onClick={toggle}>
            <Container>
                sdfs
            </Container>
        </Modal>
    )
}

export default Chance;