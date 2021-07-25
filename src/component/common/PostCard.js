import styled from 'styled-components';
import IconButton from './IconButton';
import EmotionTag from './EmotionTag';
import { RiDeleteBinLine } from "react-icons/ri";

function PostCard(props) {
    return (
        <Container borderColor={props.emotion?.color}>
            <Info>
                <EmotionTag emotion={props.emotion}/>
                <Nickname>{props.nickname || "공릉동 공룡"}</Nickname>
                <Date>{props.date || "2021.07.20"}</Date>
            </Info>
            <Content>{props.content || "그 자식한테 화가 나는 건지 나 자신한테 화가 나는건지 잘 모르겠다. 내가 뭘 잘못 했다고 나한테 이런 일이 일어나는 건지 모르겠다. 집에 가고 싶다. 그 자식한테 화가 나는 건지 나 자신한테 화가 나는건지 잘 모르겠다. 내가 뭘 잘못 했다고 나한테 이런 일이 일어나는 건지 모르겠다. 집에 가고 싶다."}</Content>
            <Delete><IconButton icon={RiDeleteBinLine} size="1.2rem" color="#7E7E7E"/></Delete>
        </Container>
    );
}

export default PostCard;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    padding: 20px 40px;
    gap: 10px;
    box-sizing: border-box;
    background-color: #3C3C3C;
    border: 1px solid #3C3C3C;
    border-radius: 5px;
    transition: border 300ms, opacity 300ms;

    &:hover {
        border: 1px solid ${props => props.borderColor || "#ffffff"};
    }

    &:active {
        opacity: 0.7;
    }
`

const Info = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
`

const Nickname = styled.span`
    flex: 1 0 0;
    margin-left: 20px;
    font-size: 0.9rem;
    font-weight: bold;
    color: #ffffff;
`

const Date = styled.span`
    font-size: 0.6rem;
    color: #ffffff;
`

const Content = styled.p`
    display: -webkit-box;
    margin: 0;
    width: 80%;
    font-size: 0.6rem;
    color: #ffffff;
    line-height: 2;
    height: 6em;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical; 
    word-wrap: break-word;
    -webkit-line-clamp: 3;
`

const Delete = styled.div`
    position: absolute;
    bottom: 20px;
    right: 40px;
`