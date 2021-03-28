import React from 'react'
import styled from 'styled-components'
import Box from '../materials/Box';

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

const Container = styled(Box)`
    background-color: #eee;
    box-shadow: 0px 2px 6px grey;
    border-radius: 10px;
    padding: 10px;
    width: 450px;
    height: 300px;
`

const BarChart = styled.div`
    display: grid;
    grid-template-columns: 60px 270px 80px;
    grid-template-rows: repeat(3, 50px);
`

const Bar = styled.div`
    height: 15px;
    width: ${({perc}) => 1+perc+'%'};
    background-color: ${({color}) => color};
`

const Chance = ({visible, toggle, participants}) => {
    const [a, b, c] = participants;
    const sum =(a+b+c)/100;
    return (
        <Modal show={visible} onClick={toggle}>
            <Container>
                <BarChart>
                    <Box>1</Box>
                    <Box left>
                        <Bar perc={a/sum} color="#cf0c0c" />
                    </Box>
                    <Box>{a}명</Box>

                    <Box>2</Box>
                    <Box left>
                        <Bar perc={b/sum} color="#20d6a0"/>
                    </Box>
                    <Box>{b}명</Box>
                    <Box>3</Box>
                    <Box left>
                        <Bar perc={c/sum} color="#245cbb"/>
                    </Box>
                    <Box>{c}명</Box>
                </BarChart>
            </Container>
        </Modal>
    )
}

export default Chance;