import styled from 'styled-components';
import MotieFrame from "@common/frame/MotieFrame";

function ProfileCard(props) {
    return (
        <Container backgroundColor={props.profile.allEmotion.color} onClick={props.onClick}>
            <Nickname>{props.profile.nickname}</Nickname>
            <MotieFrame motie={props.profile.characterName} emotion={[props.profile.recentEmotion[0]?.tag, props.profile.recentEmotion[1]?.tag]}/>
            <ContentCont>
                <Content>{props.profile.introduction}</Content>
            </ContentCont>
        </Container>
    );
}

export default ProfileCard;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 330px;
    padding: 30px;
    box-sizing: border-box;
    background: ${props => `radial-gradient(#ffffff, ${props.backgroundColor || "#FFFFFF"})`};
    transition: transform ease 300ms, opacity 300ms, box-shadow 300ms;

    &:hover {
        transform: scale(1.02, 1.02);
        box-shadow: 0 0 10px #737373;
    }

    &:active {
        opacity: 0.6;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        aspect-ratio: 10/11;
        min-width: 300px;
        mix-height: 330px;
    }
`

const Nickname = styled.p`
    margin: 0;
    font-size: 1.3rem;
    font-weight: bold;
    color: #000000;
`

const ContentCont = styled.div`
    width: 100%;
    height: 5em;
`

const Content = styled.p`
    display: -webkit-box;
    margin: 0;
    font-size: 0.8rem;
    color: #000000;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical; 
    word-break: break-word;
    -webkit-line-clamp: 3;
`