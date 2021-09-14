import styled from 'styled-components';

import EmotionTag from './EmotionTag';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function DetailPopup(props) {
    const goProfilePage = (nickname) => props.history.push(`/profile/${nickname}`);
    const slidePost = (neigh) => props.setIdx(props.idx + neigh);

    return (
        <Container isOpen={props.isOpen} onClick={() => props.setOpen(false)}>
            <PostContainer>
                <LeftContainer start={props.idx === 0}>
                    <BsChevronCompactLeft fontSize="5rem" onClick={(e) => {e.stopPropagation(); slidePost(-1);}}/>
                </LeftContainer>
                <DetailContainer onClick={(e) => e.stopPropagation()}>
                    <DetailCard>
                        <Info>
                            {props.details[props.idx].emotion && <EmotionTag emotion={props.details[props.idx].emotion}/>}
                            <Nickname emotion={props.details[props.idx].emotion} onClick={() => goProfilePage(props.details[props.idx].nickname)}>{props.details[props.idx].nickname}</Nickname>
                            <Date>{props.details[props.idx].date}</Date>
                        </Info>
                        <Content>{props.details[props.idx].content}</Content>
                    </DetailCard>
                </DetailContainer>
                <RightContainer end={props.idx === (props.details.length - 1)}>
                    <BsChevronCompactRight fontSize="5rem" onClick={(e) => {e.stopPropagation(); slidePost(1);}}/>
                </RightContainer>
            </PostContainer>
        </Container>
    );
}

export default DetailPopup;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100vh;
    background-color: #b6b6b635;
    opacity: ${props => props.isOpen ? "1" : "0"};
    visibility: ${props => props.isOpen ? "visible" : "hidden"};
    transition: 200ms all;
    z-index: 10;
`

const PostContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DetailContainer = styled.div`
    width: 60%;
    z-index: 10;

    @media only screen and (max-width: 768px) {
        width: 80%
    }
`

const LeftContainer = styled.div`
    visibility: ${props => props.start ? 'hidden' : 'visible'};
    margin-left: -20px;
    color: white;

    @media only screen and (max-width: 768px) {
        margin-right: -14px;
    }

    @media only screen and (max-width: 550px) {
        margin-right: -20px;
    }
`

const RightContainer = styled.div`
    visibility: ${props => props.end ? 'hidden' : 'visible'};
    margin-right: -20px;
    color: white;

    @media only screen and (max-width: 768px) {
        margin-left: -14px;
    }

    @media only screen and (max-width: 550px) {
        margin-left: -20px;
    }
`

const DetailCard = styled.div`
    display: flex;
    flex-flow: column nowrap; 
    gap: 20px;
    width: 100%;
    background-color: #1e1e1e;
    border-radius: 5px;
    height: 300px;
    padding: 30px 60px;
    box-sizing: border-box;

    @media only screen and (max-width: 768px) {
        height: 400px;
        padding: 30px;
    }
`

const Info = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;

    @media only screen and (max-width: 768px) {
        flex-flow: column nowrap;
        align-items: flex-start;
        gap: 2px;
    }
`
const Nickname = styled.div`
    flex: 1 0 0;
    font-size: 0.9rem;
    font-weight: bold;
    color: #ffffff;
    margin-left: ${props => props.emotion ? `20px` : `0`};

    @media only screen and (max-width: 768px) {
        margin-left: 0;
    }
`
const Date = styled.div`
    font-size: 0.8rem;
    color: #ffffff;
`

const Content = styled.p`
    display: -webkit-box;
    margin: 0;
    color: #ffffff;
    width: 100%;
    height: 90%;
    overflow-y: scroll;
    font-size: 1rem;
    line-height: 1.8;
    letter-spacing: 1px;
    word-break:keep-all;

    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: gray;
        background-clip: padding-box;
        border: 2px solid transparent;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`