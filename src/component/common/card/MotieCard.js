import styled from 'styled-components';

import dust from "../../../image/CharacterImg/dust.png";

function MotieCard(props) {
    let motieImage = dust;
    const motieName = props.motie;

    switch (motieName) {
        case "dust":
            motieImage = dust;
            break;
    }

    return (
        <Container selected={props.selected} onClick={props.onClick}>
            <Image src={motieImage} alt={motieName}/>
        </Container>
    );
}

export default MotieCard;

const Container = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 148px;
    height: 148px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid ${props => props.selected ? "white" : "transparent"};
    border-radius: 10px;

    &:hover {
        border: 1px solid white;
    }

    &:active {
        opacity: 0.6;
    }
`
const Image = styled.img`
    width: 100%;
    height: 100%;
`