import styled from 'styled-components';
import character from '../../image/CharacterImg/dust.png'
import eyes from '../../image/EmotionImg/11.png';

function MotieFrame(props) {
    return (
        <Frame>
            <Motie character={character}>
                <Eyes src={eyes}/>
            </Motie>
        </Frame>
    );
}

export default MotieFrame;

const Frame = styled.div`
    width: 100%;
    height: 100%;
`

const Motie = styled.div`
    width: 100%;
    height: 100%;
    background: center / contain no-repeat url(${props => props.character});
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Eyes = styled.img`
    max-width: 70%;
    max-height: 70%;
`