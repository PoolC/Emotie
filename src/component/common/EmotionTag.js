import styled from 'styled-components';

function EmotionTag(props) {
    return (
        <Container>
            <Circle></Circle>
            <Emotion>{props.emotion || "기쁨"}</Emotion>
        </Container>
    );
}

export default EmotionTag;

const Container = styled.div`
    display: flex;
    align-items: center;
`

const Circle = styled.p`
    margin: 0;
    width: 10px;
    height: 10px;
    border: 3px solid ${props => props.color || "#FFF27D"};
    border-radius: 50%;
`

const Emotion = styled.p`
    margin: 0 0 0 10px;
    font-size: 0.9rem;
    font-weight: bold;
    color: ${props => props.color || "#FFF27D"};
`