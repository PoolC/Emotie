import styled from 'styled-components';
import IconButton from './IconButton';
import EmotionTag from './EmotionTag';
import { RiDeleteBinLine } from "react-icons/ri";

function PostCard(props) {
    return (
        <Container>
            <Info>
                <EmotionTag></EmotionTag>
                <Nickname>{props.nickname || "공릉동 공룡"}</Nickname>
            </Info>
            <Content>{props.content || "그 자식한테 화가 나는 건지 나 자신한테 화가 나는건지 잘 모르겠다. 내가 뭘 잘못 했다고 나한테 이런 일이 일어나는 건지 모르겠다. 집에 가고 싶다. 그 자식한테 화가 나는 건지 나 자신한테 화가 나는건지 잘 모르겠다. 내가 뭘 잘못 했다고 나한테 이런 일이 일어나는 건지 모르겠다. 집에 가고 싶다."}</Content>
            <Date>{props.date || "2021.07.20"}</Date>
            <Delete><IconButton icon={RiDeleteBinLine} iconSize="1.2rem" color="#7E7E7E"></IconButton></Delete>
        </Container>
    );
}

export default PostCard;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    padding: 20px 40px;
    background-color: ${props => props.backgroundColor || "#3C3C3C"};
    border-radius: 5px;
    justify-content: center;
    align-items: start;

    &:hover {
        box-shadow: 0 0 20px black;
    }

    &:active {
        opacity: 0.7;
    }
`

const Info = styled.div`
    margin: 0 0 10px 0;
    display: flex;
`

const Nickname = styled.p`
    margin: 0 0 0 20px;
    font-size: 0.9rem;
    font-weight: bold;
    color: #ffffff;
`

const Content = styled.p`
    display: -webkit-box;
    margin: 0;
    width: 60%;
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

const Date = styled.p`
    margin: 0;
    font-size: 0.6rem;
    color: #ffffff;
    position: absolute;
    top: 25px;
    right: 40px;
`

const Delete = styled.p`
    margin: 0;
    position: absolute;
    bottom: 20px;
    right: 40px;
`