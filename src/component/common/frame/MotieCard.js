import styled from 'styled-components';

import dust from "@image/CharacterImg/dust.png";
import dust2 from "@image/CharacterImg/dust2.png";
import bear from "@image/CharacterImg/bear.png";
import cat from "@image/CharacterImg/cat.png";
import dog from "@image/CharacterImg/dog.png";
import heart from "@image/CharacterImg/heart.png";
import slime from "@image/CharacterImg/slime.png";

function MotieCard(props) {
    let motieImage;
    const motieName = props.motie;

    switch (motieName) {
        case "dust":
            motieImage = dust;
            break;
        case "dust2":
            motieImage = dust2;
            break;
        case "bear":
            motieImage = bear;
            break;
        case "cat":
            motieImage = cat;
            break;
        case "dog":
            motieImage = dog;
            break;
        case "heart":
            motieImage = heart;
            break;
        case "slime":
            motieImage = slime;
            break;
        default:
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
    width: 128px;
    height: 128px;
    padding: 15px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid ${props => props.selected ? "black" : "transparent"};
    border-radius: 10px;

    &:hover {
        border: 1px solid gray;
    }
    &:active {
        opacity: 0.6;
    }

    @media only screen and (max-width: 768px) {
        width: 98px;
        height: 98px;
        padding: 10px;
    }
`
const Image = styled.img`
    width: 100%;
    height: 100%;
`