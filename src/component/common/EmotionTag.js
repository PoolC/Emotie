import styled from 'styled-components';

function EmotionTag(props) {
    return (
        <Container>
            <Circle color={props.emotion?.color}/>
            <Emotion color={props.emotion?.color}>{props.emotion?.tag || "무난"}</Emotion>
        </Container>
    );
}

export default EmotionTag;

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`

const Circle = styled.div`
    width: 10px;
    height: 10px;
    border: 3px solid ${props => props.color || "#FFFFFF"};
    border-radius: 50%;
`

const Emotion = styled.span`
    margin-left: 10px;
    font-size: 0.9rem;
    font-weight: bold;
    color: ${props => props.color || "#FFFFFF"};
`