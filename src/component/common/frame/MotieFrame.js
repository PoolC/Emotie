import styled from 'styled-components';

import Progress from '@common/modal/Progress';

import { emotionsToIds } from '@utils/converter';

function MotieFrame(props) {
    const motieName = props.motie;
    
    // 캐릭터
    let motieImage;

    try {
        motieImage = require(`@image/CharacterImg/${motieName}.png`).default;
    }
    catch(err) {
        motieImage = require(`@image/CharacterImg/dust.png`).default;
    }

    // 표정
    const motieEmotion = emotionsToIds(props.emotion).join('');
    let motieEye;

    try {
        motieEye = require(`@image/EmotionImg/${motieEmotion}.png`).default;
    }
    catch(err) {
        motieEye = require(`@image/EmotionImg/88.png`).default;
    }

    return (
        <Frame>
            {motieName !== null 
                ? (<>
                    <Character src={motieImage} alt={motieName}/>
                    <Eyes src={motieEye} alt={motieEmotion}/>
                </>) 
                : (<Progress isInProgress={true} fullscreen={false}/>)}
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
    max-width: 90%;
    max-height: 90%;
`

const Eyes = styled.img`
    position: absolute;
    max-width: 70%;
    max-height: 70%;
`