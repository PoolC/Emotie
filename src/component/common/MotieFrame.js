import styled from 'styled-components';

import dust from "../../image/CharacterImg/dust.png";
import dust2 from "../../image/CharacterImg/dust2.png";
import bear from "../../image/CharacterImg/bear.png";
import cat from "../../image/CharacterImg/cat.png";
import dog from "../../image/CharacterImg/dog.png";
import heart from "../../image/CharacterImg/heart.png";
import slime from "../../image/CharacterImg/slime.png";

import eyes from '../../image/EmotionImg/11.png';

function MotieFrame(props) {
    let motieImage = dust;
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
    }

    return (
        <Frame>
            <Character src={motieImage} alt={motieName}/>
            <Eyes src={eyes}/>
        </Frame>
    );
}

export default MotieFrame;

const Frame = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
`

const Character = styled.img`
    position: absolute;
    width: 90%;
    aspect-ratio: 1/1;
`

const Eyes = styled.img`
    position: absolute;
    max-width: 70%;
    max-height: 70%;
`