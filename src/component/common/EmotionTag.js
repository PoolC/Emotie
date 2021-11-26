import styled from 'styled-components';

function EmotionTag(props) {
    return (
        <Container write={props.write}>
            <Circle color={props.emotion?.color} write={props.write}/>
            <Emotion color={props.emotion?.color} write={props.write}>{props.emotion?.tag || "무난"}</Emotion>
        </Container>
    );
}

export default EmotionTag;

const Container = styled.div`
    display: flex;
    flex-flow: ${props => props.write ? `column nowrap` : `row nowrap`};
    align-items: center;
    justify-content: center;
`

const Circle = styled.div`
    width: ${props => props.write ? `20px` : `10px`};
    height: ${props => props.write ? `20px` : `10px`};
    border: ${props => props.write ? `5px` : `3px`} solid ${props => props.color || "#FFFFFF"};
    border-radius: 50%;

    @media only screen and (max-width: 768px) {
        width: ${props => props.write ? `15px` : `10px`};
        height: ${props => props.write ? `15px` : `10px`};
        border: ${props => props.write ? `4px` : `3px`} solid ${props => props.color || "#FFFFFF"};
    }
`

const Emotion = styled.span`
    margin-left: ${props => props.write ? `0` : `10px`};
    margin-top: ${props => props.write ? `10px` : `0`};
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.color || "#FFFFFF"};
`