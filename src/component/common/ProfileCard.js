import styled from 'styled-components';

function ProfileCard(props) {
    return (
        <Container>
            <Nickname>{props.nickname || "공릉동 공룡"}</Nickname>
            <Content>{props.content || "자기소개는 언제나 어려워 두줄만 들어가려면 몇글자 정도여야하는지 모르겠네요 스크롤 생기는 거 싫은데"}</Content>
        </Container>
    );
}

export default ProfileCard;

const Container = styled.div`
    position: relative;
    width: 240px;
    height: 270px;
    padding: 30px;
    background: ${props => props.backgroundColor || "radial-gradient(#ffffff, #FFF27D)"};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
        box-shadow: 0 0 20px white;
    }

    &:active {
        opacity: 0.7;
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