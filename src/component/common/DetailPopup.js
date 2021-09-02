import styled from 'styled-components';

import IconButton from './IconButton';
import PostCard from './PostCard';
import { CgClose } from 'react-icons/cg';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

function DetailPopup(props) {
    return (
        <Container isOpen={props.isOpen} onClick={() => props.setOpen(false)}>
            <CloseContainer>
                <IconButton icon={CgClose} size="2.5rem" onClick={(e) => {e.stopPropagation(); props.setOpen(false)}}/>
            </CloseContainer>
            <PostContainer>
                <LeftContainer start={props.detail.index === 0}>
                    <IconButton icon={BsChevronCompactLeft} size="5rem" onClick={(e) => {e.stopPropagation(); props.slidePost(props.detail.index-1)}}/>
                </LeftContainer>
                <PostCardContainer>
                    <PostCard 
                    detail
                    {...(props.detail.emotion === "none" ? {hideEmotion: true} : {emotion: props.detail.emotion})} 
                    nickname={props.detail.nickname}
                    content={props.detail.content}
                    date={props.detail.date}
                    onClick={(e) => e.stopPropagation()}/>
                </PostCardContainer>
                <RightContainer end={props.detail.end}>
                    <IconButton icon={BsChevronCompactRight} size="5rem" onClick={(e) => {e.stopPropagation(); props.slidePost(props.detail.index+1)}}/>
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
    background-color: rgba(0, 0, 0, 0.4);
    opacity: ${props => props.isOpen ? "1" : "0"};
    visibility: ${props => props.isOpen ? "visible" : "hidden"};
    transition: 200ms all;
    z-index: 10;
`
const CloseContainer = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
`

const PostContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`

const PostCardContainer = styled.div`
    width: 60vw;
`

const LeftContainer = styled.div`
    visibility: ${props => props.start ? 'hidden' : 'visible'};
`

const RightContainer = styled.div`
    visibility: ${props => props.end ? 'hidden' : 'visible'};
`

