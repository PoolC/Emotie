import styled from 'styled-components';

function ProfileCard(props) {
    return (
        <Container backgroundColor={props.emotion?.color}>
            <Nickname>{props.nickname || "공릉동 공룡"}</Nickname>
            <Content>{props.content || "자기소개는 언제나 어려워 두줄만 들어가려면 몇글자 정도여야하는지 모르겠네요 스크롤 생기는 거 싫은데"}</Content>
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
        height: auto;
        aspect-ratio: 10/11;
        min-width: 300px;
        mix-height: 330px;
    }
`

const Nickname = styled.p`
    margin: 0;
    font-size: 1.4rem;
    font-weight: bold;
    color: #000000;
`

const Content = styled.p`
    margin: 0;
    font-size: 0.8rem;
    color: #000000;
    line-height: 1.5;
`